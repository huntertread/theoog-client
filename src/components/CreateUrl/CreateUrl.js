import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { selectUserId } from '../../redux/user/user.selector'
import { setOriginalUrl, setCreateError } from '../../redux/url/url.action'
import { selectOriginalUrl, selectCreateError } from '../../redux/url/url.selector'
import './createurl.css'

const CreateUrl = (props) => {

  const handleChange = (event) => {
    props.setOriginalUrl(event.target.value)
  }

  const checkValidUrl = (url) => {
    const regex = RegExp('((https|http)://)((\\w|-)+)(([.]|[/])((\\w|-)+))+')
    const passCheck = regex.test(url)
    if (passCheck === true) {
      return passCheck
    } else {
      return false
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(props.selectOriginalUrl)
    if (checkValidUrl(JSON.stringify(props.selectOriginalUrl))) {
      axios.post('https://api.theoog.net/', {
        owner: props.selectUserId,
        originalurl: props.selectOriginalUrl
      })
      .then((results) => {
        props.setCreateError('')
        props.getUserUrls()
      })
      .catch((err) => {
        console.error(err)
      })
    } else {
      props.setCreateError('**invalid url, must use http or https')
    }
  }

  return(
    <div>
    <div className="create-url-container">
      <form>
      <input type="text" name="originalurl" placeholder="paste your url here, http or https required" value={props.selectOriginalUrl} onChange={handleChange}/>
      <button onClick={handleSubmit}>shorten</button>
      </form>
    </div>
    <p className="create-url-error">{props.selectCreateError}</p>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    selectUserId: selectUserId(state),
    selectOriginalUrl: selectOriginalUrl(state),
    selectCreateError: selectCreateError(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setOriginalUrl: render => dispatch(setOriginalUrl(render)),
    setCreateError: render => dispatch(setCreateError(render))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateUrl);