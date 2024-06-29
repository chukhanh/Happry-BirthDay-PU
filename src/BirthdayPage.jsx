import React from 'react';
import './style.css';
const BirthdayPage = () => {
    const handleMouseMove = (e) => {
        let body = document.querySelector('body');
        let heart = document.createElement('span');
        let x = e.nativeEvent.offsetX;
        let y = e.nativeEvent.offsetY;
        heart.style.left = x + 'px';
        heart.style.top = y + 'px';

        let size = Math.random() * 10;
        heart.style.width = `${4 * size}px`;
        heart.style.height = `${4 * size}px`;

        let transformValue = Math.random() * 360;
        heart.style.transform = `rotate(${transformValue}deg)`;

        body.appendChild(heart);

        setTimeout(function() {
            heart.remove();
        }, 1000);
    };

    const handleMailClick = () => {
        const mailBox = document.querySelector('.mail');
        const boxmail = document.querySelector('.boxMail');
        mailBox.classList.toggle('active');
        boxmail.classList.add('active');
    };

    const handleCloseClick = () => {
        const boxmail = document.querySelector('.boxMail');
        boxmail.classList.remove('active');
    };

    return (
        <div className="container" onMouseMove={handleMouseMove}>
            <div className="boxcontainer">
                <div className="image">
                    <img src="../public/flag.png" alt=""/>
                </div>
                <div className="text-happybirthday">
                    <img src="../public/texthappy.png" alt=""/>
                </div>
                <div className="cake">
                    <img src="../public/cake.png" alt=""/>
                </div>
                <div className="box-balloon">
                    <div className="balloon-item1">
                        <img src="../public/balloon.png" alt=""/>
                    </div>
                    <div className="balloon-item1">
                        <img src="../public/balloon.png" alt=""/>
                    </div>
                </div>
                <div className="box-cloud">
                    <div className="cloud">
                        <img src="../public/cloud.png" alt=""/>
                    </div>
                    <div className="cloud">
                        <img src="../public/cloud.png" alt=""/>
                    </div>
                </div>
                <div className="box-firework">
                    <div className="firework">
                        <img src="../public/firework.png" alt=""/>
                        <img src="../public/firework1.png" alt="" id="firework1"/>
                    </div>
                    <div className="firework">
                        <img src="../public/firework.png" alt=""/>
                        <img src="../public/firework1.png" alt="" id="firework1"/>
                    </div>
                </div>
                <div className="paperCannons">
                    <img src="../public/paperCannons1.png" alt=""/>
                </div>
                <div className="box-giftbox">
                    <img src="../public/giftbox.png" alt=""/>
                    <img src="../public/giftbox.png" alt=""/>
                    <img src="../public/giftbox.png" alt=""/>
                    <img src="../public/giftbox.png" alt=""/>
                    <img src="../public/giftbox.png" alt=""/>
                    <img src="../public/giftbox.png" alt=""/>
                </div>
                <div className="mail">
                    <i className="fa-regular fa-envelope"></i>
                </div>
                <div className="boxcute">
                    <div className="cute1">
                        <img src="../public/cute.png" alt=""/>
                    </div>
                    <div className="cute2">
                        <img src="../public/cute.png" alt=""/>
                    </div>
                </div>
            </div>
            <div className="boxMail" onMouseMove={handleMailClick}>
                <i className="fa-solid fa-xmark" onClick={handleCloseClick}></i>
                <div className="boxMail-container">
                    <div className="card1">
                        <div className="userImg">
                            <img src="../public/Picture3.jpg" alt=""/>
                        </div>
                        <h3>Happy birthday</h3>
                        <div className="imageCute">
                            <img src="../public/cute1.png" alt=""/>
                        </div>
                    </div>
                    <div className="card2">
                        <div className="card2-content">
                            <h3>Gửi em!</h3>
                            <h2>
                                Hôm nay là một ngày đặc biệt đối với một người đặc biệt nì. Chúc
                                e có một ngày sinh nhật thật ý nghĩa, vui vẻ vẻ, hạnh phúc bên
                                gia đình và bạn bè. Chúc e sang tuổi mới lun lun vui vẻ, phải
                                lun lun vui tươi không cần tưới nháaaaa hahah, ngày càng xưn đẹp
                                hơn những năm khác nì gấp mũ n lần lun cho ae cây xoài hahaha ,
                                học giỏi nì nhưng mà học vẫn phải chú ý giữ gìn sức khỏe em nhé
                                và đặc bịt sớm có bồ như em mong muốn nháaaaa:3 . Tuy a không ở
                                gần em và có những món quà ý nghĩa đối với em nhưng a vẫn lun
                                mong muốn những điều tốt đẹp đến với em. Anh chỉ biết dùng vẻ
                                đẹp của IT làm quà tặng em tuy chỉ là 1 giao diện ko phải là 1
                                món quà vật chất nhưng a mong muốn rằng nó sẽ là 1 món quà ý
                                nghĩa, 1 món quà tinh thần nào đó trong ngày đặc biệt của em. Và
                                cuối cùng a chúc cô gái đặc biệt sinh nhật vui vẻ nhaaaaaaaaaa.
                                Chúc em tất cả những điều tốt đẹp nhấtttttt nhéeeeeeee hihi^^
                            </h2>
                            <div className="imageCute2">
                                <img src="../public/cute2.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h1>Hello</h1>
        </div>
    );
};

export default BirthdayPage;