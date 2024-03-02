import Content from '@/components/HeroSection/Content'
import HeroSection from '@/components/HeroSection/HeroSection'
import { ServicesScrollArea } from '@/components/HeroSection/ListServices'
import PaymentsCards from '@/components/HeroSection/PaymentCard/payments'
import Sample from '@/components/HeroSection/SampleWork/Sample'
import Footer from '@/components/Layout/Footer'
import NavBar from '@/components/Layout/NavBar'
import MakeOrder from '@/components/MakeOrder/MakeOrder'
import { CarouselSpacing } from '@/components/Services/CarouselServices'
import { Payment } from '@/components/Services/Payment'
import Services from '@/components/Services/Services'
import Servicetab from '@/components/Services/Servicetab'
import Theme from '@/components/theme'
import Image from 'next/image'
import Link from 'next/link'
import { FaCcPaypal, FaInstagram } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'


const services = ['Discussion Posts and Responses', 'Essays (any type)', 'Homework Assignment (any type)', 'PowerPoint Presentation with speaker notes', 'Reaction Paper', 'Reflective Writing', 'Presentation or Speech', 'Personal Narrative', 'Creative Writing', 'Critical Thinking/Review', 'Article Writing/Review', 'Book/Movie Review', 'SWOT Analysis', 'Case Study', 'Business Plan', 'Business Proposal', 'Annotated Bibliography', 'Research Proposal', 'Research Paper', 'Capstone Project', 'Admission Essay', 'IT', 'Data Analysis']

const newJson = [
  {
    "name": "Non-technical",
    "assignments": [
      {
        "type": "Discussion Posts and Responses",
        "description": "Engage in online discussions and respond to classmates' posts on a given topic."
      },
      {
        "type": "Essays",
        "description": "Compose essays of various types, such as narrative, expository, persuasive, or descriptive."
      },
      {
        "type": "Homework Assignment",
        "description": "Complete assigned tasks or problems to reinforce learning outside of class."
      },
      {
        "type": "PowerPoint Presentation with speaker notes",
        "description": "Create a presentation using PowerPoint slides with accompanying speaker notes."
      },
      {
        "type": "Reaction Paper",
        "description": "Provide a personal response and analysis to a particular reading, event, or experience."
      },
      {
        "type": "Reflective Writing",
        "description": "Share personal thoughts and reflections on a specific topic or experience."
      },
      {
        "type": "Presentation or Speech",
        "description": "Prepare and deliver an oral presentation or speech on a given subject."
      },
      {
        "type": "Personal Narrative",
        "description": "Write a story that recounts a personal experience or event."
      },
      {
        "type": "Creative Writing",
        "description": "Express imaginative and original ideas through various creative writing forms."
      },
      {
        "type": "Critical Thinking/Review",
        "description": "Evaluate and analyze a piece of work, providing a critical review."
      },
      {
        "type": "Article Writing/Review",
        "description": "Compose an article or review analyzing and commenting on a specific topic."
      },
      {
        "type": "Book/Movie Review",
        "description": "Critique and review a book or movie, discussing its strengths and weaknesses."
      },
      {
        "type": "SWOT Analysis",
        "description": "Conduct a SWOT (Strengths, Weaknesses, Opportunities, Threats) analysis for a given entity."
      },
      {
        "type": "Case Study",
        "description": "Examine and analyze a real or hypothetical case to draw conclusions and recommendations."
      },
      {
        "type": "Business Plan",
        "description": "Develop a comprehensive business plan outlining strategies and goals for a business."
      },
      {
        "type": "Business Proposal",
        "description": "Create a proposal for a business idea or project, detailing its feasibility and benefits."
      },
      {
        "type": "Annotated Bibliography",
        "description": "Compile a list of sources with brief annotations for each, summarizing their relevance."
      },
      {
        "type": "Research Proposal",
        "description": "Propose a research project, outlining its objectives, methodology, and expected outcomes."
      },
      {
        "type": "Research Paper",
        "description": "Conduct in-depth research on a specific topic and present findings in a formal paper."
      },
      {
        "type": "Capstone Project",
        "description": "Complete a culminating project integrating knowledge and skills from a course or program."
      },
      {
        "type": "Admission Essay",
        "description": "Write an essay as part of a college or program application, highlighting personal achievements and goals."
      }
    ]
  },
  {
    "name": "Programming",
    "assignments": [
      {
        "type": "HTML",
        "description": "Create and structure web pages using HTML (Hypertext Markup Language). HTML is the foundation of web development, providing the essential structure for content on the internet. By mastering HTML, developers can ensure well-organized and accessible web pages for users across various devices and platforms."
      },
      {
        "type": "CSS",
        "description": "Style and design web pages using CSS (Cascading Style Sheets). CSS empowers developers to enhance the visual appeal of websites, controlling layout, colors, and typography. With CSS, you can create responsive and attractive user interfaces, making a positive impact on the overall user experience."
      },
      {
        "type": "JavaScript",
        "description": "Develop dynamic and interactive web pages using JavaScript. JavaScript is a versatile scripting language that enables the creation of engaging user interfaces and responsive web applications. By leveraging JavaScript, developers can implement client-side functionalities, enhancing the overall interactivity and user engagement on the web."
      },
      {
        "type": "NodeJS",
        "description": "Build server-side applications using Node.js runtime. Node.js enables developers to use JavaScript for server-side programming, allowing for the development of scalable and high-performance applications. With Node.js, you can create efficient and real-time server applications that respond seamlessly to user requests."
      },
      {
        "type": "Python",
        "description": "Write programs and applications using the Python programming language. Python is a versatile and powerful language known for its simplicity and readability. Whether you're developing software, automating tasks, or working on data science projects, Python provides a robust foundation for a wide range of applications."
      },
      {
        "type": "Django",
        "description": "Develop web applications using the Django web framework for Python. Django simplifies the process of building robust and scalable web applications in Python. With features like an ORM, authentication, and built-in admin interface, Django accelerates development, allowing developers to focus on creating feature-rich and secure web applications."
      },
      {
        "type": "Ruby",
        "description": "Write scripts and applications using the Ruby programming language. Ruby's elegant syntax and object-oriented approach make it a joy to work with for both beginners and experienced developers. Whether you're building web applications with Ruby on Rails or creating scripts for automation, Ruby offers a dynamic and expressive programming experience."
      },
      {
        "type": "Java",
        "description": "Create Java applications for various platforms. Java is a versatile and widely used programming language known for its portability and performance. With Java, developers can build everything from desktop applications to mobile apps and enterprise-level systems, making it a robust choice for diverse software development projects."
      },
      {
        "type": "PHP",
        "description": "Develop server-side web applications using PHP. PHP is a server-side scripting language designed for web development. It powers a significant portion of the internet, allowing developers to create dynamic and interactive web pages. With PHP, you can build feature-rich websites and web applications that cater to diverse user needs."
      },
      {
        "type": "SQL",
        "description": "Write queries and manage databases using SQL (Structured Query Language). SQL is a fundamental language for managing and manipulating relational databases. Developers use SQL to retrieve, insert, update, and delete data, ensuring efficient and organized data management in applications. Proficiency in SQL is essential for building robust and scalable database-driven applications."
      }
    ]
  },
  {
    "name": "Data Analysis",
    "assignments": [
      {
        "type": "Excel",
        "description": "Perform data analysis and visualization using Microsoft Excel."
      },
      {
        "type": "R",
        "description": "Statistical programming and analysis using the R programming language."
      },
      {
        "type": "SPSS",
        "description": "Conduct statistical analysis using IBM SPSS (Statistical Package for the Social Sciences)."
      }
    ]
  }
]

const serviceswork = [
  {
    "id": 1,
    "serviceName": "Discussion Posts and Responses",
    "image": "/images/Discussion Post.jpg",
    "description": "Get your Discussion Posts written and Responses made to other peers' posts immediately as they are posted.",
    "category": "Non-technical"
  },
  {
    "id": 2,
    "serviceName": "Essays (any type)",
    "image": "/images/Essays.jpg",
    "description": "Place an order for Topnotch Essays: Argumentative Essays, Persuasive Essays, Narrative Essays, Descriptive Essays, Expository Essays, Definition Essays, Process Essays, and Compare and Contrast Essays.",
    "category": "Non-technical"
  },
  {
    "id": 3,
    "serviceName": "Homework Assignment (any type)",
    "image": "/images/Homework Assignment.jpg",
    "description": "If you are working and don't have enough time for your Homework Assignment, you might need to click that 'Make order' button for a little help before the deadline.",
    "category": "Non-technical"
  },
  {
    "id": 4,
    "serviceName": "Canva/PowerPoint Presentation with Speaker Notes",
    "image": "/images/PowerPoint and Canva.jpg",
    "description": "If you have to do a presentation on a topic you have been working on, you need to create amazing slides with visuals on PowerPoint or Canva. Why don't you let Essayprof help you do that?",
    "category": "Non-technical"
  },
  {
    "id": 5,
    "serviceName": "Reaction Paper",
    "image": "/images/Reaction Paper.jpg",
    "description": "A Reaction Paper is one of the best pieces since it gives one a chance to give one's opinion regarding a particular topic. Essayprof can't wait to help with such.",
    "category": "Non-technical"
  },
  {
    "id": 6,
    "serviceName": "Reflective Writing",
    "image": "/images/Reflective Writing.jpg",
    "description": "Sometimes, a module can be so boring that trying to remember what you learned and reflect on it becomes even more boring. With the module name and course materials, Essayprof can create time just to help you write the best Reflection.",
    "category": "Non-technical"
  },
  {
    "id": 7,
    "serviceName": "Presentation or Speech",
    "image": "/images/Speech Writing.jpg",
    "description": "Don't worry about that Speech assignment anymore. What is your topic and audience?",
    "category": "Non-technical"
  },
  {
    "id": 8,
    "serviceName": "Personal Narrative",
    "image": "/images/Personal Narrative Writing.jpg",
    "description": "Your ideas and experiences will help Essayprof write you a high-quality and original Personal Review; consider giving it a try.",
    "category": "Non-technical"
  },
  {
    "id": 9,
    "serviceName": "Creative Writing",
    "image": "/images/Creative Writing.jpg",
    "description": "What is your interesting Creative Topic? Essayprof got you.",
    "category": "Non-technical"
  },
  {
    "id": 10,
    "serviceName": "Critical Writing/Review",
    "image": "/images/Critical Writing.jpg",
    "description": "Essayprof will make sure all your Critical Writing instructions are followed keenly.",
    "category": "Non-technical"
  },
  {
    "id": 11,
    "serviceName": "Article Writing/Review",
    "image": "/images/Article Writing.jpg",
    "description": "For an Article Review, you need to say which article or provide one alongside a few instructions, if any, and then leave Essayprof into it. Essayprof can help you make an informed choice if you haven’t picked any article yet.",
    "category": "Non-technical"
  },
  {
    "id": 12,
    "serviceName": "Book/Movie Review",
    "image": "/images/Book and Movie Review.jpg",
    "description": "Which Movie or Book do you want a detailed review of?",
    "category": "Non-technical"
  },
  {
    "id": 13,
    "serviceName": "SWOT Analysis",
    "image": "/images/SWOT Analysis.jpg",
    "description": "Just mention your selected company or organization and let Essayprof write a SWOT Analysis for you.",
    "category": "Non-technical"
  },
  {
    "id": 14,
    "serviceName": "Case Study",
    "image": "/images/Case Study.jpg",
    "description": "Which case study do you want Essayprof to delve into and provide accurate answers?",
    "category": "Non-technical"
  },
  {
    "id": 15,
    "serviceName": "Business Plan",
    "image": "/images/Business Plan.jpg",
    "description": "Essayprof will make your stress for the Business Plan assignment disappear once you place an order.",
    "category": "Non-technical"
  },
  {
    "id": 16,
    "serviceName": "Business Proposal",
    "image": "/images/Business Proposal.jpg",
    "description": "All your business-related assignments can cease giving you a headache once you hire Essayprof.",
    "category": "Non-technical"
  },
  {
    "id": 17,
    "serviceName": "Annotated Bibliography",
    "image": "/images/",
    "description": "Essayprof will help you locate relevant sources for your Annotated Bibliography or work with yours if you have some.",
    "category": "Non-technical"
  },
  {
    "id": 18,
    "serviceName": "Research Proposal",
    "image": "/images/Research Proposal.jpg",
    "description": "Essayprof guarantees you a high-quality Research Proposal with all the requirements met.",
    "category": "Non-technical"
  },
  {
    "id": 19,
    "serviceName": "Research Paper",
    "image": "/images/Research Paper.jpg",
    "description": "Get your research paper done from scratch with credible and reliable sources and without plagiarism.",
    "category": "Non-technical"
  },
  {
    "id": 20,
    "serviceName": "Capstone Project",
    "image": "/images/Capstone Project.jpg",
    "description": "Worried about the approaching deadline for your Capstone Project? Just make an order and wait for a few hours.",
    "category": "Non-technical"
  },
  {
    "id": 21,
    "serviceName": "Admission Essay",
    "image": "/images/Admission Essay.jpg",
    "description": "Do you want to join your dream university? Essayprof will help you write a top-notch Admission Essay that makes you a priority.",
    "category": "Non-technical"
  },
  {
    "id": 22,
    "serviceName": "HTML and CSS",
    "image": "/images/CSS and HTML.jpg",
    "description": "Elevate your web development projects with HTML and CSS expertise from Essayprof. Our coding services ensure clean and semantic markup (HTML) combined with stylish and responsive styling (CSS). From basic web pages to complex layouts, trust us to deliver code that meets modern web standards.",
    "category": "Programming"
  },
  {
    "id": 23,
    "serviceName": "JavaScript (React)",
    "image": "/images/JavaScript.jpg",
    "description": "Leverage the power of JavaScript and React for dynamic and interactive web applications. Essayprof offers proficient coding services in JavaScript, crafting React components for seamless user experiences. Enhance your web development projects with our expertise in front-end technologies.",
    "category": "Programming"
  },
  {
    "id": 24,
    "serviceName": "Python (Django)",
    "image": "/images/Python.jpg",
    "description": "Harness the capabilities of Python and Django for robust web application development. Essayprof excels in writing clean and efficient Python code, coupled with the Django framework for scalable and secure web solutions. Trust us to bring your Python (Django) projects to life with expertise and precision.",
    "category": "Programming"
  },
  {
    "id": 25,
    "serviceName": "Ruby",
    "image": "/images/Ruby.jpg",
    "description": "Explore the dynamic world of Ruby programming with Essayprof's coding services. Whether you're developing scripts or web applications, our Ruby expertise ensures elegant and efficient code. Embrace the simplicity and expressiveness of Ruby with our tailored coding solutions.",
    "category": "Programming"
  },
  {
    "id": 26,
    "serviceName": "Java",
    "image": "/images/Java.jpg",
    "description": "Create cross-platform applications with Java programming expertise from Essayprof. Our Java coding services cover everything from desktop applications to enterprise-level systems. Trust us to deliver reliable and efficient Java code for your diverse software development needs.",
    "category": "Programming"
  },
  {
    "id": 27,
    "serviceName": "PHP",
    "image": "/images/PHP.jpg",
    "description": "Develop server-side web applications with Essayprof's expertise in PHP programming. Our PHP coding services ensure the seamless integration of dynamic features and functionalities into your web projects. Count on us for secure and scalable PHP solutions tailored to your specific requirements.",
    "category": "Programming"
  },
  {
    "id": 28,
    "serviceName": "SQL and MySQL",
    "image": "/images/SQL.jpg",
    "description": "Optimize your database interactions with Essayprof's SQL and MySQL coding services. From designing efficient database schemas to writing complex queries, our expertise ensures the reliability and performance of your data-driven applications. Unlock the full potential of SQL and MySQL with our tailored coding solutions.",
    "category": "Programming"
  },
  {
    "id": 29,
    "serviceName": "C/C++/C#",
    "image": "/images/C++ C# C.jpg",
    "description": "Dive into the world of low-level and object-oriented programming with Essayprof's expertise in C, C++, and C#. Whether you're working on system-level programming or developing applications, our coding services ensure clean, efficient, and maintainable code. Trust us for reliable solutions in C-based languages.",
    "category": "Programming"
  },
  {
    "id": 30,
    "serviceName": "Excel",
    "image": "/images/Excel.jpg",
    "description": "Perform data analysis on Excel with Essayprof's expertise. From organizing and cleaning data to creating insightful visualizations, our Excel services ensure that you extract meaningful insights from your datasets. Trust us for accurate and efficient data analysis using Excel.",
    "category": "Data Analysis"
  },
  {
    "id": 31,
    "serviceName": "SPSS",
    "image": "/images/SPSS.jpg",
    "description": "Conduct advanced statistical analysis with SPSS, a powerful software for social science research. Essayprof ensures accuracy and reliability in your SPSS-related tasks, providing comprehensive insights into your data. Whether it's descriptive statistics, regression analysis, or complex data interpretation, we've got you covered.",
    "category": "Data Analysis"
  },
  {
    "id": 32,
    "serviceName": "R",
    "image": "/images/R.jpg",
    "description": "Dive into data analysis with R, a versatile programming language for statistical computing. Essayprof offers expert assistance in R, helping you navigate through data visualization, statistical modeling, and exploratory data analysis. Unlock the potential of your datasets with our dedicated R programming services.",
    "category": "Data Analysis"
  },
  {
    "id": 33,
    "serviceName": "Stata",
    "image": "/images/Stata.jpg",
    "description": "Streamline your data analysis process with Stata, a robust software for researchers and analysts. Essayprof specializes in Stata-related tasks, from data management to econometric analysis. Our services ensure that your Stata projects are executed with precision, providing valuable insights for informed decision-making.",
    "category": "Data Analysis"
  },
  {
    "id": 34,
    "serviceName": "Tableau",
    "image": "/images/Tableau.jpg",
    "description": "Transform your data into interactive and visually appealing insights using Tableau. Essayprof excels in Tableau data analysis, creating dynamic dashboards and visualizations that convey complex information with clarity. Elevate your data-driven decision-making with our expertise in Tableau analytics.",
    "category": "Data Analysis"
  }
];


const sampleWork = [
  {
    "id": 1,
    "serviceName": "Discussion Posts and Responses",
    "image": "/samples/dis.PNG",
    "description": "Get your Discussion Posts written and Responses made to other peers' posts immediately as they are posted.",
    "link": "https://drive.google.com/file/d/1pwBBPDbkjfXC2pC6SuDoZAB_iGAZCSyl/view?usp=sharing"

  },
  {
    "id": 2,
    "serviceName": "IT",
    "image": "/samples/IT.PNG",
    "description": "Place an order for IT",
    "link": "https://drive.google.com/file/d/1ySblBSxeFmURVbYP1zE7OO2hDA3ia3nZ/view"
  },
  {
    "id": 3,
    "serviceName": "Homework Assignment (any type)",
    "image": "/samples/DISCUSSION.PNG",
    "description": "If you are working and dont have enough time for your Homework Assignment, you might need to click that 'Make order' button for a little help before the deadline.",
    "link": "https://drive.google.com/file/d/1Hwtdw-7X7RGGprLdKgitkqsxYmGCwYRb/view?usp=sharing"
  }

]



const categories = newJson.map((category: any) => {
  return category.name

})



const category = [
  "All",
  ...categories
]

const servicesData = services.map((serviceName, index) => ({
  id: index + 1,
  servicename: serviceName,
  image: "https://imgs.search.brave.com/_8DCna6q_hYrv1UAOmiop1cmXYjZAevafYuyj0i8smc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/NTA1OTI3MDQtNmM3/NmRlZmE5OTg1P3E9/ODAmdz0xMDAwJmF1/dG89Zm9ybWF0JmZp/dD1jcm9wJml4bGli/PXJiLTQuMC4zJml4/aWQ9TTN3eE1qQTNm/REI4TUh4elpXRnlZ/Mmg4TVRCOGZIZHlh/WFJwYm1kOFpXNThN/SHg4TUh4OGZEQT0", // Assuming image filenames match service names
  description: `Get expert help with your ${serviceName} needs.`,
  category: serviceName.includes("Writing") ? "Writing Services" : "Academic Support",
}));




export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col relative ">



        {/* navbar section */}
        <div className='w-full'>
          <NavBar />
        </div>

        {/* hero section */}

        <div className='w-full flex flex-col lg:flex-row justify-between' id='home'>
          <div style={{
            flexBasis: "55%",
          }} className='rounded-md'>
            <div className='ml-4'>
              <HeroSection />

              <Content />

            </div>


          </div>
          <div style={{
            flexBasis: "45%",
            borderRadius: "52% 48% 0% 70% / 52% 0% 70% 52% "
          }} className='bg-blue-500  shadow-md w-full md:pl-[80px] md:rounded-full h-[300px] flex flex-col items-end md:items-center lg:pl-[80px] md:justify-center mt-[50px]'>
            <div className='h-full'>
              <h3 className='leading-6 font-semibold text-white text-md border-b-2 border-b-white border-w-[10px] flex items-center py-2 justify-center'>We Offer</h3>
              {/* <ul className='list-none text-white p-2 m-4'>
                {services.map((service, index)=>(
                  <li key={index} className='px-4 leading-8 space-y-2 cursor-pointer hover:text-black hover:font-semibold'>{service}</li>
                ))}
                
              </ul> */}
              <ServicesScrollArea services={services} />
            </div>

          </div>
        </div>



        {/* about */}
        {/* <div className='flex flex-col w-full' id='about'>

          <h2 className='mt-10 mb-5 leading-6 font-bold  text-3xl flex items-center justify-center'>About</h2>
          <div className='w-full mt-2 p-2 md:p-6 bg-blue-800 h-auto flex flex-col items-center rounded-md'>

            <p className='mt-2 flex flex-wrap p-0 md:px-4 text-white  w-full md:leading-8 md:w-[800px] text-sm md:text-lg mb-2 space-y-2 justify-center items-center'>
              EssayProf is your go-to professional tutoring and assignment help platform, committed to assisting you in elevating your academic performance and realizing your full potential across diverse fields of study. With our extensive experience, we offer professional support in drafting essays, preparing paper outlines, and sourcing high-quality academic resources. Place your order for an essay or article, and we will provide instant, high-quality online assistance to help you succeed.
            </p>
          </div>
        </div> */}
       
        <section className="bg-white dark:bg-gray-900 mt-4 md:mt-6">
          <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
                Delivering Excellence in Writing Services
              </h1>
              <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                Elevate your projects with our premium writing services. We are dedicated to providing top-notch content tailored to your needs.
               
              </p>
              {/* <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                <a
                  href="https://github.com/themesberg/landwind"
                  className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 dark:text-white border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                >
                  <svg className="w-4 h-4 mr-2 text-gray-500 dark:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3

-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                  </svg> View on GitHub
                </a>
                <a
                  href="https://www.figma.com/community/file/1125744163617429490"
                  className="inline-flex items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:w-auto focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  <svg className="w-4 h-4 mr-2" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 300" width="1667" height="2500"><title>Figma.logo</title><desc>Created using Figma</desc><path id="path0_fill" className="st0" d="M50 300c27.6 0 50-22.4 50-50v-50H50c-27.6 0-50 22.4-50 50s22.4 50 50 50z" /><path id="path1_fill" className="st1" d="M0 150c0-27.6 22.4-50 50-50h50v100H50c-27.6 0-50-22.4-50-50z" /><path id="path1_fill_1_" className="st2" d="M0 50C0 22.4 22.4 0 50 0h50v100H50C22.4 100 0 77.6 0 50z" /><path id="path2_fill" className="st3" d="M100 0h50c27.6 0 50 22.4 50 50s-22.4 50-50 50h-50V0z" /><path id="path3_fill" className="st4" d="M200 150c0 27.6-22.4 50-50 50s-50-22.4-50-50 22.4-50 50-50 50 22.4 50 50z" /></svg> Get Figma file
                </a>
              </div> */}
            </div>
            <div className=" lg:mt-0 lg:col-span-5 lg:flex">
              <img src="https://media.istockphoto.com/id/1308572827/photo/proofread.jpg?s=612x612&w=0&k=20&c=Ki4oieCXRgw1W54i5NWzYjT5OxyeOLzTQqaZ9bBdT2c=" alt="hero image" />
            </div>
          </div>
        </section>
      

        {/* services */}

        <div className='flex flex-col w-full p-4' id='services'>
          <h2 className='mt-10 leading-6 font-bold  text-3xl flex items-center justify-center'>Services</h2>

          <div className='overflow-x-visible flex justify-center items-center mt-4 mx-2 md:mx-0 w-full'>
            <Servicetab tabs={category} />
          </div>

          <div className='mt-2 gap-2'>
            <Services services={serviceswork} category={category} />
          </div>
        </div>
        <div className='flex flex-col items-center w-full mt-4' id='samples'>
          <h2 className='mt-10 mb-5 leading-6 font-bold  text-3xl flex items-center justify-center'>Sample work</h2>

          {/* <div className='overflow-x-visible flex justify-center items-center mt-4'>
          <Servicetab tabs={category}/>
        </div> */}

          <div className='mt-4 gap-2 w-full p-4 '>
            <Sample samples={sampleWork} />


          </div>

        </div>

        {/* <div className='w-full md:w-[700px] relative'>

<CarouselSpacing/>

</div> */}


        <div className='md:grid grid-cols-2 gap-2'>
          {/* order form */}
          <div className='col-span-1 rounded-md p-4 mt-2 h-2/3'>
            <h2 className='text-md leading-6 font-bold flex flex-row items-center justify-center p-4 mb-4'>MAKE ORDER</h2>

            <MakeOrder services={services} />

          </div>






          {/* payment terms */}
          <div style={{

          }} className='col-span-1  s mt-2' id='paymentterms'>



            <div className='mt-6 h-full px-4'>


              <div className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <h5 className="mb-2 text-lg md:text-3xl font-bold text-gray-900 dark:text-white">Payment Method</h5>
               <div className='h-[100px]'>
               <PaymentsCards/>

               </div>
                <div className='mt-4 p-4 w-1/2 mx-auto'>
                  <Payment />
                </div>

                {/* <div className='mt-4'>
                  <span className='m-2 text-xl font-semibold'>For mobile transfer</span>
                  <div className='flex flex-col md:flex-row gap-2 items-center mt-2'>
                    <button className='p-2 cursor-pointer bg-gray-100 rounded-md dark:text-black'>Mpesa Mobile Money Acc</button>
                    <p>(+254)704946436</p>
                  </div>


                  <span className='mt-4 mb-2 text-lg font-semibold'>Email</span>

                  <div className='mt-2 flex flex-col md:flex-row items-center justify-center'>
                    <a href="mailto:kevinmarshal44@gmail.com?subject=Inquiry" className='hover:cursor-pointer hover:text-blue-800'>kevinmarshal44@gmail.com</a></div>
                </div>

                <div className='flex flex-col m-4'>
                  <span className='m-2 text-lg font-semibold'>Account details</span>

                  <ul className='list-none'>
                    <li className='p-2'>Full Name: <span className='text-md font-bold'>Kelvin Njeru</span></li>
                    <li className='p-2'>City: <span className='text-md font-bold'>Nairobi</span></li>
                  </ul>

                </div> */}

                {/* <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
                <a href=""  className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                  <svg className="me-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="/paypal-svgrepo-com.svg" viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
                  <div className="text-left rtl:text-right">
                    <div className="mb-1 text-xs">Download on the</div>
                    <div className="-mt-1 font-sans text-sm font-semibold">Mac App Store</div>
                  </div>
                </a>
                <a href="" className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                  <svg className="me-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google-play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"></path></svg>
                  <div className="text-left rtl:text-right">
                    <div className="mb-1 text-xs">Get in on</div>
                    <div className="-mt-1 font-sans text-sm font-semibold">Google Play</div>
                  </div>
                </a>
              </div> */}
              </div>

            </div>

          </div>

        </div>


        {/* footer */}


      </main>
      <div className='w-full'>

        <Footer />

      </div>
    </>
  )
}
