/**
 * Объект Promise используется для отложенных и асинхронных вычислений.
 *
 *  Промис может находиться в одном из трёх состояний:
 *  ожидание (pending): начальное состояние, промис ещё не исполнен и не отклонён.
 *  исполнено (fulfilled): операция завершена успешно.
 *  отклонено (rejected): операция завершена с ошибкой.
 *
 * */


const _promise = new Promise(function (resolve, reject) { // функция-исполнитель (executor)


    setTimeout(function () {
        resolve('Промис выполнен успешно');
    }, 3000);


});


_promise.then(function (value) {

        console.log(value);
    }, function (value) {
        console.log(value);

    }
);


_promise.then(function (value) {
        console.log(value);
    }
).catch(function (value) {
    console.log(value);
});


/**
 * */



function getPost(postId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Пост #${postId}`);
        }, 1000);
    });
}

function getUser(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Пользователь #${userId}`);
        }, 1000);
    });
}

function getComments(postId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Комментарии к посту #${postId}`);
        }, 1000);
    });
}

function errorPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(`Error`);
        }, 1000);
    });
}


getPost(123)
    .then(post => {
        console.log(post);
        return getUser(456);
    })
    .then(user => {
        console.log(user);
        return getComments(123);
    })
    .then(comments => {
        console.log(comments);
        return errorPromise();
    })
    .catch(error => {
        console.error(error);
    });