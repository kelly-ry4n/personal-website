var React = require('react')

const Markdown = require('react-markdown');
const connect = require('react-redux').connect
const Link = require('react-router').Link


exports = module.exports = {};

AboutContent = React.createClass({
    render () {
        return <div>
            hiii

            </div>
    }
})
exports.About = React.createClass({
    render () {
       return <Container>
           <AboutContent />
       </Container>
    }

})

HomePageCenterCol = React.createClass({
    render () {
        return <div className="row">
            Hi<br/>
            Hi<br/>
        </div>
    }

})


NavBar = React.createClass({
    render () {
        console.log( window.location.pathname)
        return <div className="navbar-fixed">
    <nav>
      <div className="nav-wrapper green darken-3">
        <a href="#" className="brand-logo center">Kelly Ryan</a>
      </div>
    </nav>
  </div>
        
}
})

Container = React.createClass({
   render () {
       console.log(this.props)
       return <div>
           <div id="banner" className="green lighten-2 section">
               <div className="container fullscreen">
                       <h1 className="center-on-small-only header white-text">Kelly Ryan.</h1>
                       <div className="row center">
                           <div className="header col s12 center">
                               <h4 className="header white-text">An awesome dude who can make websites using Materialize.</h4>
                           </div>
                           <img src="/static/website/img1.png" alt="Kelly on a mountain" />
                           <div className="header col s12 center">
                               <h4 className="header white-text">And also makes cool pictures from primitives using a go program he found online.</h4>
                           </div>
                       </div>
               </div>
           </div>
           <div id="banner-footer" className="section grey darken-2 white-text">
               <div className="container">
                   <div className="row no-bottom-margin">
                       <p className="col s12 grey-text text-lighten-1">A cool grey footer!</p>
                   </div>
               </div>
           </div>
           <div className="container section" id="main-content">
               <div className="row">
                   <div className="col s6 offset-s3">
                       <img className="responsive-img" alt="glaciers" src="/static/website/img2.png" />
                   </div>
               </div>
               <div className="divider"></div>
               <div className="row">
                   <h4 className="center red-text text-lighten-2">"I also like to walk up things all the way to the top of them. Even if it is a fairly long way."</h4>
               </div>
               <div className="divider"></div>
               <div className="row">
                   <div className="col s12 m4">
                       <div className="center promo">
                           <i className="material-icons large red-text text-lighten-2">flash_on</i>
                           <h5>Walks Fairly Quickly</h5>
                           <p className="light center">As well as uphill, in ski boots, and carrying things. </p>
                       </div>
                   </div>
                   <div className="col s12 m4">
                       <div className="center promo">
                           <i className="material-icons large red-text text-lighten-2">thumb_up</i>
                           <h5>The mandatory three column promo thing</h5>
                           <p className="light center">I think once in a while you see one of these in two columns, but not ever four. </p>
                       </div>
                   </div>
                   <div className="col s12 m4">
                       <div className="center promo">
                           <i className="material-icons large red-text text-lighten-2">view_module</i>
                           <h5>Eats <emph>simple</emph> food</h5>
                           <p className="light center">And also complex food! And for sure anything made with liquid nitrogen. </p>
                       </div>
                   </div>
               </div>
               <div className="divider"></div>
               <div className="row center">
                       <a className="btn-raised btn-large red lighten-2 white-text waves-effect waves-light" href="#">Buy Now!</a>
               </div>
           </div>
       </div>

    }
})

OuterContainer = React.createClass({
   render () {
       return this.props.children
   }
})

class HomePage extends React.Component {
    render() {
       return <OuterContainer>
           <Container />
       </OuterContainer>
    }
}

exports.HomePage = HomePage

