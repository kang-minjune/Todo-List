import React, { useEffect } from 'react';

const requestNotificationPermission = () => {
    if (Notification.permission === "default") {
        Notification.requestPermission().then(permission => {
            if (permission !== "granted") {
                alert("알림을 허용해주셔야 기능이 동작합니다.");
            }
        });
    }
};

const scheduleNotification = (todo) => {
    if (!todo.dueDate) return; // dueDate가 없는 경우 반환

    const timeUntilNotification = new Date(todo.dueDate).getTime() - new Date().getTime() - 10 * 60 * 1000;

    if (timeUntilNotification > 0) {
        setTimeout(() => {
            sendNotification(todo.title);
        }, timeUntilNotification);
    }
};

const sendNotification = (title) => {
    if (Notification.permission === "granted") {
        new Notification("투두리스트 알림", {
            body: `${title} 아이템의 마감 시간이 10분 남았습니다!`,
        });
    }
};

const Notification = ({ todo }) => {
    useEffect(() => {
        requestNotificationPermission();
    }, []);

    useEffect(() => {
        if (todo) {
            scheduleNotification(todo);
        }
    }, [todo]);

    return null;
};

export default Notification;