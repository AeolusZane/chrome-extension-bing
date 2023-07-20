fetch('https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=79487d1d-3e64-4e92-a1ab-6ed662b4db41', {
    method: 'POST',
    mode: 'no-cors',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "msgtype": "text",
        "text": {
            "content": '你爹来了'
        },
    })
})