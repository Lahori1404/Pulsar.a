"use client";
import axios from "axios"
import * as z from "zod";
import { Heading } from "@/components/heading";
import { Download, ImageIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { amountOptions, formSchema, resolutionOptions } from "./constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { EmptyView } from "@/components/emptyView";
import { Loader } from "@/components/loader";
import { cn } from "@/lib/utils";
import { Select, SelectValue } from "@/components/ui/select";
import { SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select";
import { Card, CardFooter } from "@/components/ui/card";
import Image from "next/image";

const ImageGenerationPage = () => {
    
    const router = useRouter();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            prompt:"",
            amount:"1",
            resolution:"512x512"
        }
    });

    const [images, setImages] = useState<string[]>([])

    const isLoading = form.formState.isSubmitting;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {

        try {
            setImages([])
            const response = await axios.post("/api/imageGeneration", values);
            const imageURLs = response.data.map((image: {url: string}) => image.url)
            setImages(imageURLs)
            form.reset()
        } catch (error: any) {
            //TODO: Open Pro Model
            console.log(values);
        } finally {
            router.refresh();
        }
        //console.log(values);
    }

    return (
        <div>
            <Heading 
            title= "Image Generation Page"
            description= "Turn your Text Prompt Into Images"
            icon={ImageIcon}
            iconColor="text-pink-700"
            bgColor="bg-pink-700/10"/>
            <div className="px-4 lg:px-8">
                <div>
                    <Form {...form}>
                        <form 
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="rounded-lg border w-full p-4 px-3 mdpx-6 focus-within:shadow-sm grid grid-cols-12 gap-2">
                            <FormField name="prompt"
                            render = {({ field }) => (
                                <FormItem className="col-span-12 lg:col-span-6">
                                    <FormControl className="m-0 p-0">
                                        <Input className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent" 
                                               disabled = {isLoading}
                                               placeholder="Generate an image with sunset at the beach." {...field}/>
                                    </FormControl>
                                </FormItem>
                            )}/>
                            <FormField 
                            control={form.control}
                            name = "amount"
                            render={({ field }) => (
                                <FormItem className="col-span-12 lg:col-span-2">
                                    <Select 
                                    disabled= {isLoading}
                                    onValueChange={field.onChange}
                                    value={field.value}
                                    defaultValue={field.value}>
                                        <FormControl>
                                          <SelectTrigger>
                                                <SelectValue defaultValue={field.value}></SelectValue>
                                          </SelectTrigger>
                                        </FormControl>
                                          <SelectContent>
                                                {amountOptions.map((option) => (
                                                    <SelectItem key={option.value} value={option.value}>
                                                        {option.label}
                                                    </SelectItem>
                                                ))}
                                          </SelectContent>
                                    </Select>
                                </FormItem>
                            )}/>

                            <FormField 
                            control={form.control}
                            name = "resolution"
                            render={({ field }) => (
                                <FormItem className="col-span-12 lg:col-span-2">
                                    <Select 
                                    disabled= {isLoading}
                                    onValueChange={field.onChange}
                                    value={field.value}
                                    defaultValue={field.value}>
                                        <FormControl>
                                          <SelectTrigger>
                                                <SelectValue defaultValue={field.value}></SelectValue>
                                          </SelectTrigger>
                                        </FormControl>
                                          <SelectContent>
                                                {resolutionOptions.map((option) => (
                                                    <SelectItem key={option.value} value={option.value}>
                                                        {option.label}
                                                    </SelectItem>
                                                ))}
                                          </SelectContent>
                                    </Select>
                                </FormItem>
                            )}/>
                            <Button className="col-span-12 lg:col-span-2 w-full" disabled={isLoading} size="icon">
                                Generate
                        </Button>
                        </form>
                    </Form>
                </div>
                <div className="space-y-4 mt-4">
                    {isLoading && (
                    <div className="p-20">
                    <Loader/>
                    </div>
                    )}
                    {images.length === 0 && !isLoading && (
                    <EmptyView label="No images generated."/>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8">
                        {images.map((imageURL) => (
                            <Card 
                            key={imageURL}
                            className="rounded-lg overflow-hidden">
                                <div className="relative aspect-square">
                                <Image alt="Image" fill src={imageURL}/>
                                </div>
                                <CardFooter className="p-2">
                                    <Button 
                                    variant="secondary" 
                                    className="w-full"
                                    onClick={() => window.open(imageURL)}>
                                        <Download className="h-4 w-4 mr-2"/>
                                        Download
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageGenerationPage;