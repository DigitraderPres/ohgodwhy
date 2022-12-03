import Product from './pages/Product'
import CountdownTimer from './CountdownTimer'

// add graphQL amplify stuff here 

// This file generates 1 to many products 

//  this is a MOCK of the ProductAPI response - This is mapped later
//  to display each product in the array
const theData = [
    {
        key : '1',
        name: 'Playstation 5',
        img: './img/ps5.png',
        time: 1669900048334,
        entries: '2'
    },
    {
        key : '2',
        name: 'iPhone XS',
        img: './img/iphone.png',
        time: 1670900048334,
        entries: '12'
    },
    {
        key : '3',
        name: 'Apple realityOS',
        img: './img/realityOS.png',
        time: 1671900048334,
        entries: '200'
    },
    {
        key : '4',
        name: 'Sonos',
        img: './img/sonos.png',
        time: 1672900048334,
        entries: '15'
    },
    {
        key : '5',
        name: 'Fidget Spinner',
        img: './img/fspinner.png',
        time: 1673900048334,
        entries: '0'
    },
    {
        key : '6',
        name: 'iMac 5K',
        img: './img/imac.png',
        time: 166999048334,
        entries: '155'
    },
    {
        key : '7',
        name: 'Apple Watch Ultra',
        img: './img/awatch.png',
        time: 1669999948334,
        entries: '2000'
    },
]

function ProductDisplay() {

// SOME BS CODE TO GENERATE UNIX TIME 3 DAYS OUT --- UNUSED 
  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
// Note - Images must be in the 'public/img' folder to display correctly

// We need ProductAPI to return products + any entries count for those for user logged in
  return (
    <>
      <div id="productPage" className="section"> 
        <h2 style={{ color: 'white', fontSize:'32pt'}}>feeling lucky?</h2>
        <p>
          enter digitrader
        </p>
        <h1>
          ↓
        </h1>
        <br/><br/>
        <br/><br/>

      </div>
      {/* doing magic 'map' array of products from data returned by ProductAPI  */}
      {theData.map(d => (<Product key={d.key} name={d.name} img={d.img} time={d.time} digi={d.entries}/>))} 
      {/* <Product name="Playstation 5"    img="./img/ps5.png"    time={1669900048334} digi="2"/> */}
      {/* <Product name="iPhone XS"        img="./img/iphone.png" time={dateTimeAfterThreeDays} digi="15"/> */}
      {/* <Product name="Apple realityOS"  img="./img/realityOS.png"    time={1670695048334} digi="150"/> */}
      {/* <Product name="Sonos"            img="./img/sonos.png"   time={1670900048334} digi="120"/> */}
      {/* <Product name="Fidget Spinner"   img="./img/fspinner.png"   time={1670685038334} digi="10"/> */}
      {/* <Product name="iMac 5K"          img="./img/imac.png"   time={1699685048334} digi="3"/> */}
      {/* <Product name="5K V-Bucks"       img="./img/vbucks.png"   time={1669995048334} digi="40"/> */}
      {/* <Product name="Apple Watch Ultra"img="./img/awatch.png" time={1669795048334} digi="50"/> */}
    </>
  );
}

export default ProductDisplay;


