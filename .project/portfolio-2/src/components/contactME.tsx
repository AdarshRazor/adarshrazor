import React, { useState } from 'react'
import { Label } from './ui/label'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
} from '@/components/ui/alert-dialog'

function ContactMe() {
  const resumeLink = process.env.NEXT_PUBLIC_RESUME_LINK
  const Google_Link = 'https://script.google.com/macros/s/AKfycbwVYncJJn5rZkYxwYlzTHdR8GEuJxcv3YKE18EXCXnEbNq-FPQu71Wxx3MlUVL3La0b/exec'
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sending, setSending] = useState(false)
  const [showDialog, setShowDialog] = useState(false)
  const [dialogContent, setDialogContent] = useState({ title: '', description: '' })

  const handleSubmit = async () => {
    if (!name || !email || !message) {
      setDialogContent({
        title: 'Missing Information',
        description: 'Please fill in all fields before sending.'
      })
      setShowDialog(true)
      return
    }

    setSending(true)
    try {
      const response = await fetch(Google_Link, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      })

      if (response.type === 'opaque') {
        setName('')
        setEmail('')
        setMessage('')
        setDialogContent({
          title: 'Success!',
          description: 'Your message has been sent successfully.'
        })
      } else {
        throw new Error('Metwork reposnse was not successful')
      }
    } catch (error) {
      console.error('Error:', error)
      setDialogContent({
        title: 'Error',
        description: 'Failed to send message. Please try again.'
      })
      
    } finally {
      setShowDialog(true)
      setSending(false)
    }
  }

  return (
    <>
      <div className="flex flex-col md:flex-row h-[80vh] w-full md:bg-[url('/poster/house.png')] bg-fit bg-no-repeat bg-right">
        <div className="flex-1 flex items-center justify-center bg-orange-200">
          <div className=''>
            <Label className='text-3xl'>name</Label>
            <Input 
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="just first name will work 😁" 
              className="sm:w-60 md:w-80"
            />
            <Label className='text-3xl pt-4'>email</Label>
            <Input 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="📧 the one to contact you." 
              className="sm:w-60 md:w-80"
            />
            <Label className='text-3xl pt-4'>text</Label>
            <Textarea 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your message here.. ✏" 
              className="h-32 sm:w-70 md:w-80"
            />
            <Button className='m-6' onClick={handleSubmit} disabled={sending}>{sending ? 'Sending...' : 'KNOW ME'}</Button>
            <Button className='m-6' variant={'ghost'} onClick={() => window.open(resumeLink, '_blank')}>Resume 📝</Button>
          </div>
        </div>
        <div className="hidden md:block md:flex-1 md:bg-[url('/profile/user.png')] bg-cover">
        </div>
      </div>
      
      <AlertDialog open={showDialog} onOpenChange={setShowDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{dialogContent.title}</AlertDialogTitle>
            <AlertDialogDescription>
              {dialogContent.description}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction>OK</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}

export default ContactMe