import React, { useState } from 'react'
import Image from 'next/image'
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';

function ActiveUpdate() {
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogContent, setDialogContent] = useState({ title: '', content: '', image: '' });

  const handleViewMore = (title: string, content: string, image: string) => {
    setDialogContent({ title, content, image });
    setOpenDialog(true);
  };
  return (
    <>
    <div className='flex flex-col md:flex-row justify-between w-full'>
    <div className='flex items-baseline w-full md:w-1/3 mb-4 md:mb-0'>
        <div>
            <Badge variant="secondary">last online &#8226;</Badge>
            <Badge variant="default">Online &#8226;</Badge>
        </div>
        <div className='text-sm px-2'>
            3:25AM (4/10/2025)
        </div>
    </div>
    
    <div className='flex flex-col w-full md:w-2/3 items-center'>
        <div className='flex items-center gap-2 mb-4'>
            <h2 className='text-3xl md:text-4xl font-bold text-center'>Active update</h2>
            <Image
                src="/reuse/verify.png"
                alt="Verified"
                width={42}
                height={42}
                className="object-contain"
            />
        </div>
        <div className='flex flex-col md:flex-row items-center md:items-baseline gap-4 w-full'>
        <Card className='w-full md:w-1/2 mb-4 md:mb-0'>
            <CardHeader>
            <CardTitle>
                Somethign
            </CardTitle>
            </CardHeader>
            <Image
                src="/reuse/banner.png"
                alt="Banner"
                width={800}
                height={200}
                className="w-full h-[120px] object-cover"
            />
            <CardContent>
                <div className="line-clamp-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
                <button
                    onClick={() => handleViewMore('Somethign', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', '/reuse/banner.png')}
                    className="text-blue-600 hover:text-blue-800 mt-2 text-sm"
                >
                    View More
                </button>
            </CardContent>
        </Card>
        <Card className='w-full md:w-1/2'>
            <CardHeader>
            <CardTitle>
                Somethign
            </CardTitle>
            </CardHeader>
            <Image
                src="/reuse/banner.png"
                alt="Banner"
                width={800}
                height={200}
                className="w-full h-[120px] object-cover"
            />
            <CardContent>
                <div className="line-clamp-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
                <button
                    onClick={() => handleViewMore('Somethign', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nLorem ipsum dolor sit amet, consectetur adipiscing elit.\nLorem ipsum dolor sit amet, consectetur adipiscing elit.\nLorem ipsum dolor sit amet, consectetur adipiscing elit.\nLorem ipsum dolor sit amet, consectetur adipiscing elit.', '/reuse/banner.png')}
                    className="text-blue-600 hover:text-blue-800 mt-2 text-sm"
                >
                    View More
                </button>
            </CardContent>
        </Card>
        </div>

        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{dialogContent.title}</DialogTitle>
                </DialogHeader>
                <Image
                    src={dialogContent.image}
                    alt="Banner"
                    width={800}
                    height={200}
                    className="w-full h-[200px] object-cover rounded-md"
                />
                <div className="mt-4 whitespace-pre-line">
                    {dialogContent.content}
                </div>
            </DialogContent>
        </Dialog>
    </div>
    </div>
    </>
  )
}

export default ActiveUpdate