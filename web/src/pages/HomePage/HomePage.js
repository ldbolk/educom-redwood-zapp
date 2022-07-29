import KlantgegevensCell from 'src/components/KlantgegevensCell';
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <KlantgegevensCell/>

    </>
  )
}

export default HomePage
