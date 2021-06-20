export default function Leaderboard(){
  return (
    <div className="container mb-3">
    <div id="leaderboard" className="carousel slide carousel-multi-item" data-ride="carousel">


    <div className="carousel-inner" role="listbox">

      <div className="carousel-item active">

        <div className="row">
          <div className="col-md-4">
            <div className="leader">
            <span className="rank">1</span>
            <div className="details">
              <p><h4>Blah Blah Blah</h4>
              RSET<br />
              56</p>
            </div>
            </div>
          </div>

          <div className="col-md-4 clearfix d-none d-md-block">
          <div className="leader">
          <span className="rank">2</span>
          <div className="details">
            <p><h4>Blah Blah Blah</h4>
            RSET<br />
            56</p>
          </div>
          </div>
          </div>

          <div className="col-md-4 clearfix d-none d-md-block">
          <div className="leader">
          <span className="rank">3</span>
          <div className="details">
            <p><h4>Blah Blah Blah</h4>
            RSET<br />
            56</p>
          </div>
          </div>
          </div>
        </div>

      </div>

      <div className="carousel-item">

        <div className="row align-items-center">
          <div className="col-md-6">
          <div className="leader">
          <span className="rank">4</span>
          <div className="details">
            <p><h4>Blah Blah Blah</h4>
            RSET<br />
            56</p>
          </div>
          </div>
          </div>

          <div className="col-md-6 clearfix d-none d-md-block">
          <div className="leader">
          <span className="rank">5</span>
          <div className="details">
            <p><h4>Blah Blah Blah</h4>
            RSET<br />
            56</p>
          </div>
          </div>
          </div>



      </div>
    </div>
    </div>
    <div className="controls-top">
      <a className="btn-floating control-left" href="#leaderboard" data-slide="prev"><i className="fa fa-2x fa-chevron-left"></i></a>
      <a className="btn-floating control-right" href="#leaderboard" data-slide="next"><i className="fa fa-2x fa-chevron-right"></i></a>
    </div>
    </div>
    </div>
  );
}
