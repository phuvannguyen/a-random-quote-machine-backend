import React from 'react'
import "./Social.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faTwitterSquare, faTumblrSquare} from '@fortawesome/free-brands-svg-icons'

function Social({change, color}) {
    
    
    return (<div>
        <a href="https://twitter.com/intent/tweet" 
          
         id="tweet-quote" target="_blank"><FontAwesomeIcon icon={faTwitterSquare} size="2x"/></a>
        <a href="https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=Mark%20Twain&content=The%20two%20most%20important%20days%20in%20your%20life%20are%20the%20day%20you%20are%20born%20and%20the%20day%20you%20find%20out%20why.&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button" id="tumbr-quote" 
          target="_blank"><FontAwesomeIcon icon={faTumblrSquare} size="2x"/></a>             

    </div>)
}
export default Social;