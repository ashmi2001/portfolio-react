import { ChevronDown, FileText, Github, Linkedin } from 'lucide-react'
import { Button } from './components/Button'
import Ashmi from './assets/ashmi.jpeg'

function App() {

  return (
    <>
      <div className='w-100'>
        
      <div className="flex items-center justify-center h-screen">
        <div className=''>
          <div>
            <img src={Ashmi} className='mb-3 w-48 h-48 rounded-full shadow-lg mx-auto'/>
          </div>
          <div className=''>
            <h1 className='text-center'>Ashmi Kartik Parmar</h1>
            <div className='w-full flex justify-center'>
              <div className='w-1/2 p-5'>
                  <p className='text-center'>I am currently pursuing my Masters in Software Engineering from Stevens Institute Of Technology. 
                    I am passionate about Coding especically Fullstack development. 
                    I am skilled in Python, Javascript, PhP and React. 
                    Additionally, I am an aspiring Vlogger </p>
              </div>
            </div>
            <div className='flex gap-2 justify-center pt-4'>
            <Button variant="default" size="default" className='flex gap-1'>
                <FileText />
                Resume
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin />
              </Button>
              <Button variant="ghost" size="icon">
                <Github />
              </Button>
            </div>
          </div>
        </div>

        <Button size="icon" className='absolute bottom-4 items-center'>
          <ChevronDown />
        </Button>
      </div>


      <div className='h-screen'>
        <div className='text-center'>
          <h2>Achievements</h2>
        </div>
      </div>

      </div>
    </>
  )
}

export default App
