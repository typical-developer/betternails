import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactForm() {
  return (
    <Card className="max-w-[1200px] w-[400px] mx-auto py-10 shadow-lg">
      <CardHeader>
        <CardTitle className="text-center text-xl font-semibold">Contact Form</CardTitle>
      </CardHeader>

      <CardContent>
        <form
          action="https://formsubmit.co/your@email.com"
          method="POST"
          className="flex flex-col gap-4"
        >
          <Input type="text" name="name" placeholder="Your Name" required />
          <Input type="email" name="email" placeholder="Your Email" required />
          <Textarea name="message" placeholder="Your Message" required />

          <CardFooter className="p-0 mt-2">
            <Button type="submit" className="w-full">Send Message</Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  )
}
