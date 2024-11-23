function listPush() {
    let date = new Date().toLocaleString();
    let notification;
    let notificationPermission = Notification.permission;
    if(notificationPermission === "granted"){
        notification = new Notification(`Hello world!!😄`, {
            body: `재방문 일시 : ${date}`,
            icon: `😸`,
        })
    } else if(notificationPermission !== "denied") {
        Notification.requestPermission(function(permission) {
            if(permission === "granted"){
                notification = new Notification(`Hello, World!!😄`, {
                    body: `첫 방문 일시 : ${date}`,
                    icon: `😸`,
                });
            } else {
                alert("알람 허용이 거부되었습니다.")
            }
        })
    }
}

helloWorld();