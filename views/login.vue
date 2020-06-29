<!DOCTYPE html>
<html lang="en">
<head>

    <title><%= title %></title>
</head>
<body>
    <h3>登录</h3>
    <div>
        <form action="/users/login" method="post">
            <input type="text" name="name" value="" placeholder="请输入用户名">
            <br>
            <input type="password" name="pwd" value="" placeholder="请输入密码">
            <br>
            <input type="submit" name="" value="登录">
        </form>
        <div>还没有账号,<a href="/regist">立即注册</a> </div>
    </div>
</body>
</html>