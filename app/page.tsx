import Nav from "./nav/nav"
import Body from "./body/body"

export default function Home() {
  return (
   <>
        <div className="checkbox"  >
            <input type="checkbox" id="toggle" placeholder="a" className="cb" />
          <label htmlFor=""></label>
            <div className="background"></div>
            </div>
    <Nav />
    <Body  />

   </>
  )
}
