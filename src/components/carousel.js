export default function Carousel() {
  return(
    <div className="container">
      <div className="row text-center align-items-center">
        <div className="col m-2">
          <img className="hot" src="images\Non-Technical\ace of trades.png" alt="Ace Of Trades" />
        </div>
        <div className="col m-2 ">
          <h4>ACE OF TRADES</h4>
          <p>A series of rounds that assess your entrepreneurial skills and traits. The Top contestant will be named the <strong>‘Ace of Trades’</strong>.</p>
        </div>
        <div className="col m-2">
             <img className="hot" src="images\Technical\FinTech'21.jpg" alt="FinTech" />
        </div>
        <div className="col m-2">
		        <h4 >Finhack'21</h4>
            <p >It is a 48-hour FinTech Hackathon where participants are required to solve any of the 3 problem statement given.</p>
        </div>
        </div>
      </div>
  );
}
