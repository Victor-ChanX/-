import axios from 'axios'

const host = 'https://haipengwandou.mynatapp.cc/'
const request = (option) => {
  var success = option.success
  option.url = host + option.url
  axios(option)
    .then(function (res) {
      if (res.data.code === 0) {
        success(res.data.data, res.data)
      } else {
        alert(res.data.msg)
      }
    })
}

export default {
  host,
  request
}
