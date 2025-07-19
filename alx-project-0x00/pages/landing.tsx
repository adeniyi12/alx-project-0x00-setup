import Button from "@/components/Button"
import Card from "@/components/Card"

const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <Button title="Click Me" style="bg-blue px-4 py-4 border-1 mx-2 rounded-sm"/>
      <Button title="Click Me" style="bg-green px-6 py-6 border-2 mx-4 rounded-md"/>
      <Button title="Click Me" style="bg-yellow px-8 py-8 border-3 rounded-lg"/>
    </div>
  )
}
export default Landing