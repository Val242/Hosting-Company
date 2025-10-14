import CloudHosting from "@/components/CloudHosting"
import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"
import Package from "@/components/Package"

export default function Page(){
  return(
    <div className="mx-6">

    <Navbar></Navbar>
    <Hero></Hero>
    <CloudHosting/>
    <Package />

   
    
    
    </div>
  )
}