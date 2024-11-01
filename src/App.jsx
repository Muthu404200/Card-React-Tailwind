import Card from './Components/Card'
import image from './assets/1.jpeg'
import image1 from './assets/2.png'

function App() {
  return (
    <>
    <main className='flex items-center justify-center h-screen bg-black gap-5 p-4'>
      <Card name={"Monkey D. Luffy"}imgSrc={image} para={"Monkey D. Luffy is the captain of the Straw Hat Pirates, and dreamt of being a pirate since childhood "} />
      <Card name={"Roronoa Zoro"}imgSrc={image1} para={"Zoro is confident but often acts in a very comical manner. A running gag is that he has a terrible sense of direction."} />
    </main>

    </>
  )
}

export default App