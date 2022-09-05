import { NextComponentType } from "next"
import { FormEventHandler, useEffect, useState } from "react"

interface ComponentProps {
  addClassNames?: String,
  sentCallback?: () => unknown
}

const ContactForm: NextComponentType<any, any, ComponentProps> = ({ addClassNames, sentCallback }) => {
  const [data, setData] = useState<{ name: string, email: string, message: string }>()
  const [sent, setSent] = useState(false)

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.stopPropagation()
    event.preventDefault()

    const newData = Object.fromEntries(new FormData(event.currentTarget).entries())
    setData(newData as any)
  }

  useEffect(() => {
    if (!data) return

    fetch('/api/contact-me', { method: 'PUT', body: JSON.stringify(data) })
      .then(() => {
        setSent(true)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [data])

  useEffect(() => {
    if (sent === true)
      sentCallback?.call(null)
  }, [sent, sentCallback])

  return (sent ? (<span>Thanks for contact me!</span>) :
    (<div className={`flex flex-col gap-2 ${addClassNames}`}>
      <h2 className='text-lg font-medium text-center'>Contact me</h2>
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="email">Name</label>
          <input type="text" name="name" id="email" placeholder="Foo"
            className="p-2 border-2 rounded-lg" required />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="name" placeholder="example@email.com"
            className="p-2 border-2 rounded-lg" required />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" placeholder="My beautiful message" rows={6}
            className="p-2 border-2 rounded-lg resize-none" minLength={5} required></textarea>
        </div>
        <button type="submit" {...{ disabled: data && true }} className='p-2 font-medium text-white
        rounded-md bg-blue-600 hover:bg-blue-700 transition-colors disabled:bg-gray-700'>Send</button>
      </form>
    </div>)
  )
}

export default ContactForm