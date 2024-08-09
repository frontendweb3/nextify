
import FAQItem from "./FAQItem.client";
import { baseOptions } from '@/app/(site)/layout.config';
export function FAQ() {
  const { faqs } = baseOptions
  return (
    <section>
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-5 py-16 md:px-10 md:py-20">
        <div className="mx-auto flex max-w-xl flex-col items-center justify-center px-6 text-center lg:max-w-3xl lg:px-10">
          <h1 className="text-3xl lg:text-4xl font-bold ">
            Frequently Asked Questions
          </h1>
          <p className="font-inter mt-4 max-w-xl px-5 text-base font-light  lg:max-w-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna
          </p>
        </div>
        <div className="mt-10 flex w-full max-w-4xl flex-col">
          {faqs && faqs.map((faq) => <FAQItem key={faq.key} answer={faq.answer} question={faq.question} /> )}
        </div>
        <p className="font-inter mx-auto mt-12 text-base  text-center">
          Can’t find the answer you’re looking for? Reach out to our
          <a href="#" className=" font-bold">
            {" "}
            customer support team.
          </a>
        </p>
      </div>
    </section>
  )
}

