'use client'
import { useState } from 'react'
import { Container } from '@/components/Container'

import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline'

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Check if any field is empty
    const isAnyFieldEmpty = Object.values(formData).some(
      (value) => value.trim() === '',
    )

    if (isAnyFieldEmpty) {
      alert('Please fill out all fields.')
      return // Prevent the form from submitting
    }

    try {
      const response = await fetch('https://formspree.io/f/xoqglnva', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`) // Throw an error if response is not ok
      }

      // Reset form data after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        message: '',
      })
    } catch (error) {
      console.error('Submission failed', error)
      // Here you can also update your UI to inform the user that the submission failed
    }
  }

  return (
    <Container>
      <div className="relative isolate">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
          {/* Adjust text color for dark mode */}
          <div className="relative px-6 pb-20 pt-24 text-gray-900 sm:pt-32 lg:static lg:px-8 lg:py-48 dark:text-gray-200">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight">
                Get in touch
              </h2>
              <p className="mt-6 text-lg leading-8">
                I&apos;m always excited to connect with like-minded individuals,
                potential collaborators, and anyone interested in discussing new
                ideas or opportunities. Whether you have a question, a project
                proposal, or just want to say hello, I&apos;m here to listen.
                Feel free to reach out through any of the channels below, and
                I&apos;ll make sure to get back to you as soon as possible. Your
                messages are important to me, and I appreciate the time you take
                to write.
              </p>
              {/* Adjusted icon and text colors for dark mode */}
              <dl className="mt-10 space-y-4 text-base leading-7">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <BuildingOffice2Icon
                      className="h-7 w-6 text-gray-400 dark:text-gray-500"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    Walter-meckauer-strasse-12
                    <br />
                    Nürnberg, Germany
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Telephone</span>
                    <PhoneIcon
                      className="h-7 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    <a
                      className="hover:text-gray-900"
                      href="tel:+1 (555) 234-5678"
                    >
                      +49 (176) 201-33185
                    </a>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Email</span>
                    <EnvelopeIcon
                      className="h-7 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    <a
                      className="hover:text-gray-900"
                      href="mailto:chakmadhiraj@gmail.com"
                    >
                      chakmadhiraj@gmail.com
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <form
            className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
            onSubmit={handleSubmit}
          >
            <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-semibold leading-6 text-gray-900 dark:text-zinc-400"
                  >
                    First name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      onChange={handleChange}
                      name="firstName"
                      id="firstName"
                      autoComplete="given-name"
                      value={formData.firstName}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-semibold leading-6 text-gray-900 dark:text-zinc-400"
                  >
                    Last name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      onChange={handleChange}
                      name="lastName"
                      id="lastName"
                      autoComplete="family-name"
                      value={formData.lastName}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold leading-6 text-gray-900 dark:text-zinc-400"
                  >
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      onChange={handleChange}
                      name="email"
                      id="email"
                      autoComplete="email"
                      value={formData.email}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="phoneNumber"
                    className="block text-sm font-semibold leading-6 text-gray-900 dark:text-zinc-400"
                  >
                    Phone number
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="tel"
                      onChange={handleChange}
                      name="phoneNumber"
                      id="phoneNumber"
                      autoComplete="tel"
                      value={formData.phoneNumber}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold leading-6 text-gray-900 dark:text-zinc-400"
                  >
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      onChange={handleChange}
                      id="message"
                      rows={4}
                      value={formData.message}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue={''}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-8 flex justify-end">
                <button
                  type="submit"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:text-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Send message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Container>
  )
}
