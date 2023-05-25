import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isEmojiClicked: true}

  setIsFeedbackSelected = () => {
    this.setState({
      isEmojiClicked: false,
    })
  }

  render() {
    const {isEmojiClicked} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources

    return (
      <div className="feedback-bg-container">
        <div className="feedback-card-container">
          {isEmojiClicked ? (
            <div>
              <h1 className="heading">
                How satisfied are you with our customer support performance?
              </h1>
              <ul className="emojis-list-container">
                {emojis.map(emoji => (
                  <li
                    key={emoji.id}
                    className="list-item-container"
                    onClick={this.setIsFeedbackSelected}
                  >
                    <img
                      src={emoji.imageUrl}
                      alt={emoji.name}
                      className="emoji"
                    />
                    <p className="emoji-title">{emoji.name}</p>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="thankyou-container">
              <img src={loveEmojiUrl} className="emoji" alt="love emoji" />
              <h1 className="heading">Thank You!</h1>
              <p>
                Well use your feedback to improve our customer support
                performance.
              </p>
            </div>
          )}
        </div>
      </div>
    )
  }
}
export default Feedback
