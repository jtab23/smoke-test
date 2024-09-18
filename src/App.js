import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { motion } from 'framer-motion';  // Import Framer Motion
import { Bars3Icon, CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { BellIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'For Tenants', href: '#tenants' },
  { name: 'For Landlords', href: '#landlords' },
  { name: 'How It Works', href: '#how-it-works' },
];

const stats = [
  { id: 1, name: 'Rent payments processed monthly', value: '£44 million' },
  { id: 2, name: 'Tenants using FlexRent', value: '119,000+' },
  { id: 3, name: 'New users annually', value: '46,000' },
];

const companyStats = [
  { label: 'Founded', value: '2023' },
  { label: 'Employees', value: '37' },
  { label: 'Cities', value: '12' },
  { label: 'Raised', value: '£1.9M' },
];

const footerNavigation = [
  {
    name: 'Facebook',
    href: '#',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: '#',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'X',
    href: '#',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    href: '#',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: '#',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
]

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [open, setOpen] = useState(false); // Modal state
  const [isSubmitting, setIsSubmitting] = useState(false); // Loading state for email form
  const [isModalSubmitting, setIsModalSubmitting] = useState(false); // Loading state for modal form
  const [featureInterest, setFeatureInterest] = useState([]); // Multi-select for feature interest
  const [ageRange, setAgeRange] = useState(''); // Age range selection
  const [additionalFeedback, setAdditionalFeedback] = useState(''); // Additional feedback input
  const [comingSoonOpen, setComingSoonOpen] = useState(false); // State to control "Coming Soon" modal

  const handleNavigationClick = () => {
    setComingSoonOpen(true); // Open the "Coming Soon" modal
  };

  // Handles form submission for the email waitlist
  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Show loader or disable button while submitting

    try {
      const response = await fetch('https://formspree.io/f/manwzzkv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setOpen(true); // Open modal after email submission
        setEmail(''); // Clear the email input
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error. Please try again.');
    } finally {
      setIsSubmitting(false); // Re-enable the submit button
    }
  };

  // Handles form submission for the modal form
  const handleModalSubmit = async (e) => {
    e.preventDefault();
    setIsModalSubmitting(true); // Show loader or disable button while submitting modal

    const modalData = {
      featureInterest: featureInterest.join(', '), // Join multiple selections as a string
      ageRange,
      additionalFeedback,
    };

    try {
      const response = await fetch('https://formspree.io/f/manwzzkv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(modalData),
      });

      if (response.ok) {
        setOpen(false); // Close modal after modal form submission
        setFeatureInterest([]); // Clear modal inputs
        setAgeRange('');
        setAdditionalFeedback('');
        alert('Thank you for your feedback!');
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error. Please try again.');
    } finally {
      setIsModalSubmitting(false); // Re-enable the submit button
    }
  };

  // Toggle feature interest selection
  const toggleFeatureInterest = (feature) => {
    setFeatureInterest((prev) =>
      prev.includes(feature)
        ? prev.filter((item) => item !== feature)
        : [...prev, feature]
    );
  };

  return (
<div className="bg-gradient-to-br from-blue-600 via-indigo-500 to-indigo-400 min-h-screen flex flex-col">
<header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex items-center lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5 flex items-center">
              <span className="sr-only">FlexYourRent</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=green&shade=500"
                alt="FlexMyRent Logo"
              />
              
              <span className="ml-2 text-xl font-bold text-white">FlexYourRent</span>

            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12 lg:justify-center lg:flex-1">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={handleNavigationClick}
                className="text-sm font-semibold leading-6 text-white hover:text-gray-300"
              >
                {item.name}
              </button>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            {/* This empty div maintains the layout balance */}
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5 flex items-center">
                <span className="sr-only">FlexYourRent</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt="FlexMyRent Logo"
                />
                <span className="ml-2 text-xl font-bold text-gray-900">FlexYourRent</span>
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <main>
        {/* Hero section */}
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-white ring-1 ring-white/10 hover:ring-white/20">
                Coming soon to the United Kingdom.{' '}
                <a href="#" className="font-semibold text-white">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Join Waitlist <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                <motion.span
                  className="relative"
                  // Framer Motion "wobble" effect when page loads
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                >
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-500">
                    Flex
                  </span>
                </motion.span>
                ible Rent Payments for a <span className="italic underline decoration-green-500 decoration-5">Fairer</span> Future
              </h1>
  <p className="mt-6 text-lg leading-8 text-gray-200 max-w-2xl mx-auto">
    <span className="text-white font-semibold">FlexMyRent</span> is designed for tenants who need 
    <span className="text-white font-semibold"> flexibility</span> - allowing you to break up your monthly rent payment into manageable chunks. 
    Enjoy <span className="text-white font-semibold">stress-free payments</span>, <span className="text-white font-semibold">build your credit score</span>, 
    and make renting work for you.
  </p>
  
  {/* Join Waitlist Form */}
  <div className="mt-10 flex items-center justify-center gap-x-6">
      {/* Your form */}
      <form
        onSubmit={handleEmailSubmit}
        className="flex w-full max-w-md gap-x-4"
      >
        <label htmlFor="email-address" className="sr-only">
          Email address
        </label>
        <input
          id="email-address"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="min-w-0 flex-auto rounded-md border-4 border-green bg-white px-4 py-3 text-gray-900 shadow-lg placeholder-gray-500 focus:ring-4 focus:ring-green focus:outline-none focus:ring-offset-2 focus:ring-offset-green-500 transition-all"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className={`flex-none rounded-md bg-gradient-to-r from-purple-500 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-gradient-to-l hover:from-green-600 hover:to-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all transform hover:scale-105 ${
            isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? 'Submitting...' : 'Join Waitlist'}
        </button>
      </form>
      {/* Modal for secondary form (optional feedback) */}
      <Dialog open={open} onClose={() => setOpen(false)} className="relative z-10">
  <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" />

  <div className="fixed inset-0 z-10 overflow-y-auto flex items-center justify-center">
    <div className="flex items-center justify-center min-h-full p-4">
      <div className="relative bg-white rounded-lg px-8 pt-6 pb-8 shadow-2xl sm:w-full sm:max-w-md">
        {/* Centering Icon and Text */}
        <div className="flex flex-col items-center">
          <div className="flex h-12 w-12 mb-4 items-center justify-center rounded-full bg-yellow-100">
            <BellIcon className="h-6 w-6 text-yellow-600" aria-hidden="true" />
          </div>
          <Dialog.Title as="h3" className="text-lg font-semibold text-gray-900">
            We’d love to know more!
          </Dialog.Title>

          <div className="mt-4 w-full">
            {/* Secondary form inside modal */}
            <form onSubmit={handleModalSubmit}>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Which features are you most interested in?</label>
                <div className="mt-2 flex flex-col space-y-3">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      value="Flexible payments"
                      checked={featureInterest.includes('Flexible payments')}
                      onChange={() => toggleFeatureInterest('Flexible payments')}
                      className="rounded-full text-green-600 focus:ring-green-500"
                    />
                    <span>Flexible payments 💸</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      value="Credit building"
                      checked={featureInterest.includes('Credit building')}
                      onChange={() => toggleFeatureInterest('Credit building')}
                      className="rounded-full text-green-600 focus:ring-green-500"
                    />
                    <span>Credit building 📈</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      value="Rewards for paying rent"
                      checked={featureInterest.includes('Rewards for paying rent')}
                      onChange={() => toggleFeatureInterest('Rewards for paying rent')}
                      className="rounded-full text-green-600 focus:ring-green-500"
                    />
                    <span>Rewards for paying rent 🎁</span>
                  </label>
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">How old are you?</label>
                <select
                  className="block w-full border border-gray-300 rounded-xl shadow-sm px-4 py-3 focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  value={ageRange}
                  onChange={(e) => setAgeRange(e.target.value)}
                  required
                >
                  <option value="" disabled>Select your age range</option>
                  <option value="18-24">18-24</option>
                  <option value="25-34">25-34</option>
                  <option value="35-44">35-44</option>
                  <option value="45-54">45-54</option>
                  <option value="55+">55+</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">What else would you like us to do?</label>
                <textarea
                  className="block w-full border border-gray-300 rounded-xl shadow-sm px-4 py-3 focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  rows="3"
                  value={additionalFeedback}
                  onChange={(e) => setAdditionalFeedback(e.target.value)}
                />
              </div>

              <button
                type="submit"
                disabled={isModalSubmitting}
                className="inline-flex w-full justify-center rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all"
              >
                {isModalSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</Dialog>
      <Dialog open={comingSoonOpen} onClose={() => setComingSoonOpen(false)} className="relative z-10">
  <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" />
  <div className="fixed inset-0 z-10 overflow-y-auto">
    <div className="flex items-center justify-center min-h-full p-4 text-center sm:p-0">
      <div className="relative bg-white rounded-lg px-4 pt-5 pb-4 shadow-xl sm:w-full sm:max-w-sm sm:p-6">
        <div className="flex flex-col items-center">
          <div className="flex h-12 w-12 mb-4 items-center justify-center rounded-full bg-yellow-100">
          <BellIcon className="h-6 w-6 text-white-600" aria-hidden="true" />
          </div>
          <h3 className="text-lg leading-6 font-medium text-gray-900">Coming Soon</h3>
          <p className="mt-2 text-sm text-gray-500">
            Sign up to the waitlist to get notified when this feature is available.
          </p>
          <button
            onClick={() => setComingSoonOpen(false)} // Close the modal
            className="mt-4 inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</Dialog>              </div>
</div>

          </div>
        </div>


      </main>

  {/* Footer */}
  <footer className="mt-auto">
    <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
      <div className="mt-8 md:order-1 md:mt-0">
        <p className="text-center text-xs leading-5 text-green-500">
          &copy; 2024 FlexYourRent, Inc. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</div>
  );
}


export default App;

