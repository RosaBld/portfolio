import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function Tech() {
    const location = useLocation();

    const { t } = useTranslation();

    const isHomePage = location.pathname === '/';

    return (
        <div className="pt-10 font-custom">
            <div className="py-10">
                <h2 className={`font-bold py-2 my-2 ${isHomePage ? 'text-center text-4xl' : 'text-left text-4xl lg:text-6xl'}`}>
                    {t('tech_title')}
                </h2>
                <p className={`${isHomePage ? 'text-center text-2xl ' : 'text-left text-2xl lg:text-3xl'}`}>
                    {t('tech_text')}
                </p>
            </div>

            <div className="flex items-center justify-center">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-center items-center p-10 gap-10">
                    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="p-4">
                        <path d="M22.1325 102.004L13.7062 7.5H106.294L97.8562 101.989L59.9437 112.5L22.1325 102.004Z" fill="#E44F26"/>
                        <path d="M60 104.467L90.6375 95.9737L97.845 15.2287H60V104.467Z" fill="#F1662A"/>
                        <path d="M60 50.2763H44.6625L43.605 38.4075H60V26.8163H30.9375L31.215 29.9288L34.0613 61.8675H60V50.2763ZM60 80.3775L59.9475 80.3925L47.04 76.9088L46.215 67.665H34.5787L36.2025 85.86L59.9475 92.4525L60 92.4375V80.3775Z" fill="#EBEBEB"/>
                        <path d="M59.9587 50.2763V61.8675H74.2312L72.8887 76.9013L59.9587 80.3888V92.4488L83.7225 85.86L83.895 83.9025L86.6175 53.3888L86.9025 50.2763H59.9587ZM59.9587 26.8163V38.4075H87.9562L88.1887 35.805L88.7175 29.9288L88.995 26.8163H59.9587Z" fill="white"/>
                    </svg>

                    <svg width="120" height="119" viewBox="0 0 120 119" fill="none" xmlns="http://www.w3.org/2000/svg" className="p-4">
                        <path d="M22.1325 101.154L13.71 7.4375H106.29L97.8563 101.139L59.9438 111.562L22.1325 101.154Z" fill="#1572B6"/>
                        <path d="M60 103.597L90.6375 95.174L97.845 15.1018H60V103.597Z" fill="#33A9DC"/>
                        <path d="M60 49.054H75.3375L76.395 37.2842H60V25.7895H89.0625L88.785 28.8724L85.9387 60.5487H60V49.054Z" fill="white"/>
                        <path d="M60.0713 78.9044L60.0188 78.9193L47.1113 75.4609L46.2863 66.2942H34.65L36.2738 84.3413L60.015 90.8788L60.0713 90.8639V78.9044Z" fill="#EBEBEB"/>
                        <path d="M74.3512 60.0615L72.9562 75.4534L60.03 78.9119V90.8714L83.79 84.3412L83.9662 82.4001L85.98 60.0615H74.3512Z" fill="white"/>
                        <path d="M60.0413 25.7895V37.2842H32.0438L31.8113 34.6996L31.2825 28.8724L31.005 25.7895H60.0413ZM60 49.054V60.5487H47.2538L47.0213 57.9641L46.4963 52.1369L46.2188 49.054H60Z" fill="#EBEBEB"/>
                    </svg>     

                    <svg width="117" height="100%" viewBox="0 0 117 87" fill="none" xmlns="http://www.w3.org/2000/svg" className="p-4">
                        <g clipPath="url(#clip0_9_34)">
                        <path d="M100.673 50.0766C96.6031 50.0975 93.0654 51.0694 90.1035 52.5063C89.0163 50.3721 87.9295 48.4708 87.738 47.076C87.5246 45.4493 87.2691 44.4561 87.5246 42.5122C87.7805 40.5683 88.9313 37.8001 88.9098 37.589C88.8888 37.3778 88.6539 36.3846 86.3099 36.3637C83.9659 36.3424 81.9413 36.8073 81.7069 37.42C81.4725 38.0326 81.025 39.4273 80.7266 40.8637C80.3217 42.9771 76.0386 50.5198 73.5882 54.471C72.7994 52.9291 72.1175 51.5765 71.9681 50.499C71.7551 48.8722 71.4992 47.879 71.7551 45.9351C72.011 43.9912 73.1618 41.2235 73.1403 41.0119C73.1188 40.8007 72.8844 39.8075 70.5404 39.7866C68.1959 39.7653 66.1714 40.2302 65.9374 40.8429C65.7029 41.4559 65.447 42.8923 64.9571 44.2871C64.4667 45.6818 58.777 58.275 57.2853 61.5285C56.6825 62.8453 56.0501 64.1487 55.3887 65.4376C55.3887 65.4376 55.3672 65.501 55.3032 65.6066C55.0954 66.0107 54.8825 66.4122 54.6643 66.811V66.8318C54.3444 67.4028 54.0035 67.9307 53.833 67.9307C53.7051 67.9307 53.4706 66.4095 53.8755 64.3387C54.7279 59.9652 56.7524 53.1615 56.7314 52.9291C56.7314 52.8022 57.1148 51.6191 55.4102 51.006C53.7476 50.3934 53.1512 51.4075 53.0018 51.4075C52.8528 51.4075 52.7458 51.7668 52.7458 51.7668C52.7458 51.7668 54.6004 44.118 49.2086 44.118C45.8418 44.118 41.1959 47.7734 38.8944 51.0694C36.278 52.4811 33.664 53.8968 31.0521 55.3166C29.7953 56.0139 28.4951 56.7113 27.2804 57.3661C27.1949 57.2818 27.1099 57.1758 27.0245 57.0915C20.5034 50.1822 8.44206 45.3012 8.95345 36.0257C9.1454 32.6449 10.3172 23.7705 32.1178 12.9947C50.0609 4.22583 64.3392 6.65549 66.8112 12.0436C70.3484 19.7349 59.1609 34.0183 40.6205 36.0887C33.5455 36.8708 29.8374 34.1661 28.9 33.152C27.9198 32.0953 27.7703 32.0318 27.4079 32.2435C26.8115 32.5606 27.1949 33.5113 27.4079 34.0605C27.9623 35.4969 30.2423 38.0326 34.0994 39.2796C37.5092 40.378 45.7988 40.991 55.8361 37.1454C67.0666 32.8348 75.8467 20.8546 73.2682 10.8183C70.6893 0.633908 53.6411 -2.72556 37.5092 2.95799C27.9198 6.33921 17.5201 11.6634 10.0402 18.594C1.15369 26.834 -0.252978 33.997 0.322395 36.9976C2.3899 47.6465 17.2006 54.5771 23.1248 59.7114C22.8264 59.8804 22.549 60.0286 22.315 60.1555C19.3527 61.6132 8.05818 67.4658 5.24529 73.6568C2.04897 80.6716 5.75714 85.7009 8.20762 86.3765C15.8154 88.4686 23.6362 84.7076 27.8343 78.4953C32.0324 72.2834 31.521 64.2119 29.5819 60.5144C29.5604 60.4722 29.5394 60.4296 29.4964 60.3875C30.2638 59.9439 31.0521 59.479 31.8194 59.0354C33.2297 58.2088 34.6579 57.4126 36.103 56.6474C35.3781 58.6126 34.8453 60.958 34.5898 64.3387C34.2699 68.3113 35.9105 73.4665 38.0631 75.4947C39.0223 76.3828 40.1516 76.4037 40.8764 76.4037C43.3909 76.4037 44.5206 74.3329 45.7778 71.8819C47.312 68.8818 48.6972 65.3954 48.6972 65.3954C48.6972 65.3954 46.9711 74.8191 51.6595 74.8191C53.3642 74.8191 55.0903 72.6214 55.8576 71.5017V71.5226C55.8576 71.5226 55.9001 71.4592 55.9856 71.3114C56.156 71.0368 56.2625 70.8674 56.2625 70.8674V70.8257C56.9444 69.6421 58.479 66.9587 60.759 62.5004C63.6999 56.7534 66.5342 49.5696 66.5342 49.5696C66.5342 49.5696 66.7901 51.3232 67.6635 54.239C68.1753 55.9505 69.2402 57.831 70.0929 59.648C69.4111 60.5991 68.9847 61.127 68.9847 61.127L69.0062 61.1483C68.4518 61.8665 67.8554 62.6481 67.1946 63.4094C64.8716 66.1558 62.1017 69.3045 61.7178 70.2126C61.2699 71.2901 61.3769 72.0722 62.2297 72.7062C62.8475 73.1711 63.9553 73.234 65.0851 73.1711C67.1736 73.0229 68.6438 72.5158 69.3681 72.1991C70.4979 71.7976 71.8191 71.1846 73.0548 70.276C75.3353 68.6067 76.72 66.2192 76.5925 63.0714C76.5285 61.3386 75.9532 59.6059 75.2498 57.9787C75.4633 57.6833 75.6547 57.3874 75.8682 57.0915C79.4694 51.8724 82.2613 46.1462 82.2613 46.1462C82.2613 46.1462 82.5172 47.8998 83.3905 50.8161C83.8169 52.2951 84.6907 53.901 85.4576 55.4643C82.0693 58.1903 79.9808 61.3594 79.2349 63.4302C77.8927 67.2759 78.9365 69.0082 80.9186 69.4097C81.8134 69.6 83.0921 69.1772 84.0299 68.7757C85.2231 68.3956 86.6298 67.7408 87.9725 66.7684C90.253 65.0995 92.4475 62.775 92.3195 59.6272C92.2556 58.1903 91.8721 56.7743 91.3393 55.4009C94.2161 54.2182 97.9243 53.563 102.655 54.1122C112.799 55.2953 114.802 61.5706 114.418 64.2123C114.035 66.8531 111.904 68.29 111.201 68.7336C110.497 69.1777 110.263 69.3254 110.327 69.6421C110.412 70.107 110.753 70.0862 111.35 70.0014C112.181 69.8537 116.678 67.8672 116.869 63.0075C117.189 56.7956 111.222 50.0132 100.673 50.0766ZM22.4215 76.2346C19.0543 79.8687 14.3663 81.2421 12.3417 80.0803C10.1682 78.8333 11.0205 73.4665 15.1546 69.6213C17.6691 67.2759 20.9083 65.0991 23.0608 63.7683C23.5508 63.4724 24.2756 63.0501 25.1494 62.5217C25.2984 62.437 25.3838 62.3948 25.3838 62.3948L25.8952 62.0776C27.4079 67.5713 25.9592 72.4103 22.4215 76.2346ZM46.9286 59.7114C45.7563 62.543 43.3059 69.7903 41.8142 69.3888C40.5355 69.0508 39.7467 63.5571 41.5583 58.1269C42.4746 55.4009 44.4137 52.147 45.5434 50.8796C47.376 48.8509 49.4005 48.1744 49.8904 48.9991C50.5088 50.0766 47.6529 57.9365 46.9286 59.7114ZM67.1521 69.3041C66.6617 69.5578 66.1933 69.7269 65.9799 69.6C65.8309 69.5153 66.1933 69.1772 66.1933 69.1772C66.1933 69.1772 68.7292 66.473 69.7305 65.2473C70.3064 64.5291 70.9878 63.684 71.7126 62.7329V63.0075C71.7126 66.2405 68.5583 68.4169 67.1516 69.3041H67.1521ZM82.7512 65.7756C82.3888 65.5219 82.4527 64.6768 83.6675 62.0355C84.1364 61.0001 85.2441 59.2678 87.1412 57.5985C87.3542 58.2746 87.5036 58.9298 87.4821 59.5424C87.4606 63.6205 84.5202 65.1417 82.7512 65.7756Z" fill="#CD6799"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_9_34">
                        <rect width="117" height="87" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>

                    <img src="./icons/php.png" alt="php" className="size-28 p-4" /> 

                    <svg width="120" height="100%" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="p-4">
                        <path d="M7.5 7.5H112.5V112.5H7.5V7.5Z" fill="#F5DE19"/>
                        <path d="M78.0337 89.5312C78.9284 91.3485 80.3183 92.8759 82.0434 93.9375C83.7684 94.9991 85.7583 95.5515 87.7837 95.5313C91.8712 95.5313 94.485 93.4875 94.485 90.6562C94.485 87.2812 91.8 86.0738 87.3 84.105L84.8325 83.0475C77.7075 80.0138 72.9825 76.215 72.9825 68.1825C72.9825 60.7838 78.6075 55.1475 87.4312 55.1475C90.2876 54.9412 93.1415 55.5805 95.637 56.9856C98.1324 58.3907 100.159 60.4994 101.464 63.0488L93.75 67.98C93.2476 66.716 92.3728 65.6345 91.2416 64.879C90.1104 64.1236 88.7763 63.7298 87.4162 63.75C86.8228 63.6906 86.2236 63.7555 85.6566 63.9404C85.0897 64.1254 84.5675 64.4265 84.1233 64.8244C83.6792 65.2224 83.3228 65.7085 83.0768 66.2518C82.8309 66.7951 82.7009 67.3837 82.695 67.98C82.695 70.9388 84.5287 72.1388 88.7625 73.98L91.23 75.0375C99.615 78.6338 104.355 82.2975 104.355 90.5363C104.355 99.42 97.3762 104.287 88.005 104.287C84.3536 104.52 80.713 103.691 77.5223 101.901C74.3317 100.11 71.7274 97.4342 70.0237 94.1963L78.0337 89.5312ZM43.1775 90.3863C44.7262 93.135 46.1362 95.46 49.5262 95.46C52.7662 95.46 54.8137 94.1925 54.8137 89.2612V55.71H64.68V89.3925C64.68 99.6075 58.68 104.257 49.9462 104.257C46.8591 104.426 43.7931 103.657 41.1513 102.051C38.5096 100.444 36.4157 98.0761 35.145 95.2575L43.1775 90.3863Z" fill="black"/>
                    </svg> 

                    <svg width="113" height="100%" viewBox="0 0 113 101" fill="none" xmlns="http://www.w3.org/2000/svg" className="p-4">
                        <g clipPath="url(#clip0_9_38)">
                        <path d="M92.9055 32.7027C91.7031 32.2887 90.4904 31.9051 89.2687 31.5523C89.4739 30.7106 89.6628 29.8792 89.8305 29.0623C92.5838 15.6484 90.7839 4.8418 84.636 1.28376C78.7415 -2.1272 69.1016 1.4295 59.3659 9.93344C58.4064 10.773 57.4682 11.6368 56.5521 12.524C55.9389 11.9341 55.3148 11.3556 54.6803 10.7888C44.4767 1.69618 34.2493 -2.13606 28.1081 1.43216C22.2189 4.85376 20.475 15.0127 22.9537 27.7254C23.2004 28.9844 23.4788 30.237 23.7888 31.4819C22.3411 31.8947 20.9442 32.3342 19.6073 32.802C7.6444 36.9881 0.00473022 43.5483 0.00473022 50.3529C0.00473022 57.3808 8.20626 64.43 20.6661 68.7044C21.6763 69.0495 22.6948 69.3692 23.7208 69.6634C23.3876 71.0042 23.0918 72.354 22.8337 73.7114C20.4706 86.2035 22.316 96.1223 28.1893 99.5222C34.2555 103.033 44.437 99.4248 54.3506 90.7268C55.1545 90.0197 55.9406 89.2925 56.7084 88.546C57.7004 89.5066 58.7189 90.4393 59.7627 91.343C69.366 99.6365 78.8501 102.985 84.7177 99.5762C90.7781 96.055 92.748 85.3995 90.1907 72.4356C89.9892 71.42 89.7633 70.4094 89.5132 69.4047C90.2282 69.1921 90.93 68.9733 91.6141 68.7456C104.567 64.4384 112.995 57.4748 112.995 50.3529C112.995 43.5235 105.109 36.919 92.9055 32.7027ZM90.0962 64.1474C89.4783 64.3525 88.8445 64.5505 88.1983 64.7432C86.7683 60.1995 84.8386 55.3684 82.4769 50.3764C84.7305 45.5036 86.586 40.734 87.9759 36.22C89.1318 36.5558 90.2533 36.9097 91.3347 37.2832C101.791 40.8961 108.169 46.2372 108.169 50.3529C108.169 54.7367 101.281 60.4277 90.0962 64.1474ZM85.4557 73.3765C86.5865 79.1087 86.7476 84.2916 85.9986 88.3435C85.3259 91.9844 83.9727 94.4115 82.299 95.3839C78.7385 97.4526 71.1235 94.7637 62.9109 87.6707C61.9401 86.8305 60.9927 85.9634 60.0698 85.0703C63.2539 81.5757 66.4357 77.5131 69.5412 73.0009C75.0036 72.5145 80.1641 71.7189 84.8439 70.6331C85.0694 71.5426 85.2733 72.4573 85.4557 73.3765ZM38.5257 95.0264C35.0468 96.2592 32.2759 96.2946 30.6009 95.3254C27.0369 93.2624 25.5552 85.298 27.5762 74.6151C27.8165 73.3527 28.0915 72.0972 28.4011 70.8502C33.0293 71.8779 38.1523 72.6168 43.6275 73.0624C46.7542 77.4776 50.0278 81.5358 53.327 85.0894C52.6259 85.7703 51.9082 86.4338 51.1745 87.0793C46.7904 90.9252 42.3974 93.654 38.5257 95.0264ZM22.2277 64.1204C16.7181 62.2302 12.168 59.7738 9.04928 57.0933C6.24658 54.6849 4.83199 52.2932 4.83199 50.3529C4.83199 46.2234 10.9657 40.9564 21.1962 37.3766C22.4378 36.9425 23.7372 36.5328 25.0856 36.1483C26.4997 40.7641 28.3543 45.5904 30.5925 50.4708C28.3252 55.4233 26.4441 60.3267 25.0163 64.997C24.0797 64.7278 23.1499 64.4355 22.2277 64.1204ZM27.691 26.7947C25.5675 15.9031 26.9777 7.68707 30.5268 5.62499C34.3067 3.42868 42.6653 6.56013 51.4755 14.4115C52.05 14.9247 52.6152 15.4482 53.1708 15.9819C49.8879 19.52 46.6443 23.5481 43.5454 27.9371C38.2313 28.4315 33.1445 29.2253 28.4678 30.2889C28.1796 29.1311 27.9206 27.9661 27.691 26.7951V26.7947ZM76.4301 38.8739C75.3255 36.9589 74.1798 35.0679 72.994 33.2024C76.5991 33.66 80.0533 34.2673 83.2969 35.0098C82.3233 38.1426 81.1095 41.4175 79.6808 44.7753C78.6365 42.7867 77.5527 40.8191 76.4301 38.8739ZM56.5543 19.4443C58.7806 21.8652 61.0104 24.5678 63.2036 27.5003C58.7546 27.2895 54.2981 27.2886 49.849 27.4977C52.0444 24.5922 54.2932 21.8931 56.5543 19.4443ZM36.551 38.9071C35.4425 40.8367 34.3789 42.792 33.3612 44.7713C31.9559 41.4255 30.7532 38.1355 29.7711 34.9584C32.9949 34.2346 36.4327 33.6427 40.0149 33.1936C38.8159 35.0705 37.6609 36.9754 36.551 38.9067V38.9071ZM40.1177 67.8569C36.4168 67.4423 32.9274 66.8811 29.7045 66.1767C30.702 62.9429 31.9312 59.5829 33.367 56.1653C34.3887 58.1461 35.4566 60.1026 36.57 62.0331C37.7149 64.0176 38.9004 65.9614 40.1177 67.8569ZM56.6876 81.6027C54.3996 79.1255 52.1177 76.3848 49.8892 73.4372C52.0528 73.5222 54.2583 73.5657 56.5 73.5657C58.8031 73.5657 61.0797 73.5138 63.3205 73.4137C61.1203 76.4145 58.8989 79.1592 56.6876 81.6027ZM79.7262 55.9908C81.2366 59.446 82.5095 62.7883 83.5203 65.9667C80.2444 66.7171 76.7073 67.3214 72.9804 67.7701C74.1746 65.87 75.3311 63.9462 76.4491 61.9998C77.5858 60.0215 78.6784 58.0179 79.7262 55.9908ZM72.268 59.5794C70.5564 62.5635 68.7487 65.4909 66.8475 68.3571C63.4038 68.6019 59.9524 68.7235 56.5 68.7216C52.9837 68.7216 49.5635 68.6118 46.27 68.3974C44.3192 65.5378 42.477 62.6053 40.7471 59.6059H40.7476C39.0259 56.6225 37.4177 53.5745 35.9265 50.4685C37.4139 47.3619 39.0172 44.3124 40.733 41.3267L40.7326 41.3272C42.4477 38.3407 44.2753 35.4206 46.2113 32.5734C49.5714 32.3182 53.0172 32.1853 56.4996 32.1853H56.5C59.9983 32.1853 63.4485 32.3196 66.8078 32.5765C68.7243 35.4195 70.5401 38.3295 72.2521 41.301C73.9736 44.2802 75.5981 47.3147 77.1231 50.3999C75.6138 53.5166 73.9944 56.5784 72.268 59.5794ZM82.2253 5.48058C86.0087 7.67068 87.4802 16.5024 85.103 28.0842C84.9512 28.8231 84.7808 29.5757 84.5954 30.339C79.9072 29.2528 74.8169 28.4452 69.4874 27.9433C66.3828 23.506 63.1656 19.4717 59.9361 15.9793C60.7825 15.1604 61.649 14.3628 62.5349 13.5872C70.8768 6.30142 78.6731 3.4247 82.2253 5.48058ZM56.5 40.2263C62.0723 40.2263 66.5898 44.7603 66.5898 50.3529C66.5898 55.9456 62.0723 60.4795 56.5 60.4795C50.9278 60.4795 46.4103 55.9456 46.4103 50.3529C46.4103 44.7603 50.9278 40.2263 56.5 40.2263Z" fill="#00D8FF"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_9_38">
                        <rect width="113" height="101" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg> 

                    <img src="./icons/vite.jpeg" alt="vitejs" className="size-28 p-4" />

                    <img src="./icons/ts.png" alt="typescript" className="size-24 p-4" />

                    <svg width="131" height="100%" viewBox="0 0 131 131" fill="none" xmlns="http://www.w3.org/2000/svg" className="p-4">
                        <path d="M36.8438 56.0844C40.6646 40.801 50.2167 33.1594 65.5 33.1594C88.425 33.1594 91.2906 50.3531 102.753 53.2187C110.395 55.1292 117.081 52.2635 122.812 44.6219C118.992 59.9052 109.44 67.5469 94.1562 67.5469C71.2313 67.5469 68.3656 50.3531 56.9031 47.4875C49.2615 45.5771 42.575 48.4427 36.8438 56.0844ZM8.1875 90.4719C12.0083 75.1885 21.5604 67.5469 36.8438 67.5469C59.7687 67.5469 62.6344 84.7406 74.0969 87.6062C81.7385 89.5167 88.425 86.651 94.1562 79.0094C90.3354 94.2927 80.7833 101.934 65.5 101.934C42.575 101.934 39.7094 84.7406 28.2469 81.875C20.6052 79.9646 13.9187 82.8302 8.1875 90.4719Z" fill="#44A8B3"/>
                    </svg> 

                    <svg width="105" height="100%" viewBox="0 0 105 105" fill="none" xmlns="http://www.w3.org/2000/svg" className="p-4">
                        <g clipPath="url(#clip0_9_40)">
                        <path d="M103.02 47.8219L57.1758 1.98038C54.5372 -0.6598 50.2552 -0.6598 47.6134 1.98038L38.0937 11.5001L50.1699 23.5763C52.9762 22.6281 56.1943 23.2642 58.4313 25.5012C60.6789 27.7525 61.3106 30.9981 60.3393 33.8134L71.9775 45.452C74.7932 44.482 78.0421 45.1095 80.291 47.3621C83.434 50.5039 83.434 55.596 80.291 58.7399C77.1471 61.8841 72.055 61.8841 68.9095 58.7399C66.5454 56.3733 65.9613 52.9013 67.1582 49.9888L56.3046 39.1352L56.3034 67.6973C57.0902 68.0863 57.8088 68.6002 58.4313 69.2189C61.5743 72.3607 61.5743 77.4532 58.4313 80.5995C55.2874 83.7422 50.1929 83.7422 47.0535 80.5995C43.9105 77.4532 43.9105 72.3611 47.0535 69.2193C47.8067 68.4658 48.7019 67.869 49.6871 67.4635V38.6352C48.7004 38.2324 47.8048 37.6353 47.0535 36.8793C44.6722 34.5013 44.0996 31.0071 45.3198 28.0831L33.4154 16.1775L1.98105 47.6099C-0.660352 50.2525 -0.660352 54.5349 1.98105 57.1755L47.8259 103.018C50.4652 105.658 54.7464 105.658 57.3891 103.018L103.019 57.3884C105.66 54.747 105.66 50.4621 103.019 47.8219" fill="#DE4C36"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_9_40">
                        <rect width="105" height="105" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg> 

                    <svg width="112" height="100%" viewBox="0 0 112 112" fill="none" xmlns="http://www.w3.org/2000/svg" className="p-4">
                        <path d="M101.535 17.605L81.354 7.88899C80.2143 7.33948 78.9319 7.15814 77.6846 7.37011C76.4372 7.58208 75.2867 8.17686 74.3925 9.07199L8.33 69.3C7.52847 70.0273 7.04868 71.0432 6.99617 72.1243C6.94366 73.2053 7.32273 74.2629 8.05 75.0645C8.1375 75.159 8.225 75.25 8.3195 75.334L13.713 80.234C14.4178 80.8754 15.325 81.2497 16.277 81.2919C17.229 81.3341 18.1657 81.0416 18.9245 80.465L98.497 20.125C99.098 19.6689 99.8144 19.3897 100.566 19.3186C101.317 19.2476 102.073 19.3877 102.749 19.7231C103.424 20.0585 103.993 20.5758 104.391 21.217C104.789 21.8581 105 22.5975 105 23.352V23.1175C105 21.9656 104.675 20.8372 104.062 19.862C103.449 18.8868 102.573 18.1045 101.535 17.605Z" fill="#0065A9"/>
                        <path d="M101.535 94.395L81.354 104.115C80.214 104.662 78.932 104.843 77.685 104.631C76.438 104.419 75.2875 103.825 74.3925 102.932L8.33 42.7C7.52847 41.9727 7.04868 40.9568 6.99617 39.8758C6.94366 38.7947 7.32273 37.7371 8.05 36.9355C8.1375 36.841 8.225 36.75 8.3195 36.666L13.713 31.766C14.4185 31.1219 15.3277 30.7459 16.2821 30.7037C17.2365 30.6615 18.1754 30.9557 18.935 31.535L98.497 91.875C99.098 92.3311 99.8144 92.6104 100.566 92.6814C101.317 92.7524 102.073 92.6123 102.749 92.2769C103.424 91.9415 103.993 91.4242 104.391 90.783C104.789 90.1419 105 89.4025 105 88.648V88.9C104.996 90.0488 104.669 91.1733 104.057 92.1451C103.444 93.1168 102.57 93.8965 101.535 94.395Z" fill="#007ACC"/>
                        <path d="M81.354 104.115C80.214 104.662 78.9319 104.843 77.685 104.631C76.438 104.419 75.2875 103.825 74.3925 102.932C74.8951 103.428 75.533 103.764 76.2261 103.899C76.9192 104.034 77.6368 103.962 78.289 103.691C78.9411 103.42 79.4988 102.963 79.8921 102.376C80.2854 101.79 80.4969 101.1 80.5 100.394V11.606C80.5006 10.8965 80.2906 10.2028 79.8966 9.61277C79.5026 9.02274 78.9423 8.56291 78.2868 8.29155C77.6313 8.02019 76.9099 7.9495 76.2142 8.08843C75.5184 8.22737 74.8795 8.56968 74.3785 9.072C75.2728 8.1772 76.4231 7.58239 77.6702 7.36983C78.9174 7.15727 80.1997 7.33747 81.34 7.8855L101.517 17.5875C102.559 18.0845 103.438 18.8658 104.054 19.8412C104.671 20.8165 104.998 21.9463 105 23.1V88.9C105 90.0528 104.675 91.1823 104.061 92.1582C103.448 93.1341 102.571 93.9168 101.531 94.416L81.354 104.115Z" fill="#1F9CF0"/>
                    </svg> 

                    <svg width="88" height="100%" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg" className="p-4">
                        <path fillRule="evenodd" clipRule="evenodd" d="M44 0C19.69 0 0 19.69 0 44C0 63.47 12.595 79.915 30.085 85.745C32.285 86.13 33.11 84.81 33.11 83.655C33.11 82.61 33.055 79.145 33.055 75.46C22 77.495 19.14 72.765 18.26 70.29C17.765 69.025 15.62 65.12 13.75 64.075C12.21 63.25 10.01 61.215 13.695 61.16C17.16 61.105 19.635 64.35 20.46 65.67C24.42 72.325 30.745 70.455 33.275 69.3C33.66 66.44 34.815 64.515 36.08 63.415C26.29 62.315 16.06 58.52 16.06 41.69C16.06 36.905 17.765 32.945 20.57 29.865C20.13 28.765 18.59 24.255 21.01 18.205C21.01 18.205 24.695 17.05 33.11 22.715C36.63 21.725 40.37 21.23 44.11 21.23C47.85 21.23 51.59 21.725 55.11 22.715C63.525 16.995 67.21 18.205 67.21 18.205C69.63 24.255 68.09 28.765 67.65 29.865C70.455 32.945 72.16 36.85 72.16 41.69C72.16 58.575 61.875 62.315 52.085 63.415C53.68 64.79 55.055 67.43 55.055 71.555C55.055 77.44 55 82.17 55 83.655C55 84.81 55.825 86.185 58.025 85.745C66.7597 82.796 74.3497 77.1822 79.7268 69.6937C85.1039 62.2052 87.9974 53.219 88 44C88 19.69 68.31 0 44 0Z" fill="black"/>
                    </svg> 
                </div>
            </div>
        </div>
    )
}