const default_locale = 'en'

const translations = {
    'ge': {
        'email': 'ელ-ფოსტა',
        'password': 'პაროლი',
        'confirm_password': 'გაიმეორეთ პაროლი',
        'username': 'მომხარებლის სახელი',
        'country': 'ქვეყანა',
        'city': 'ქალაქი',
        'phone_number': 'ტელეფონის ნომერი',
        'homepage': 'მთავარი',
        'main_information': 'მთავარი ინფორმაცია',
        'contact': 'კონტაქტი',
        'authorization': 'ავტორიზაცია',
        'registration': 'რეგისტრაცია',
        'about_us': 'ჩვენს შესახებ',
        'movies': 'ფილმები',
        'slide_0': 'ლორემ იპსუმ ძალისხმევა გუშაგები ლუარსაბზე',
        'slide_1': 'დიდებულ. ნათლიდედის სანტა საყვარელიაო, კომენტატორების ჩითი მკითხავმა საოცრებავ პასტორი კომპარტიის რისხვით',
        'slide_2': 'ემოქმედა ვატყობ ულაზათოდ სტრიქონებს',
        'slide_3': 'ინდაურიც, ჩადრებში ხილიაო ისტორიისა იძრეს მეღვინეები. კენტის დახლთან მშვიდობიანობის სიამაყე ღიად',
        'slide_4': 'ფრანცისკოდან ჩასჩურჩულა მარაზმის პრივილეგირებული წყევლაა. სიღრმედ გაჭირდა მოჰხნავდა უყურა პრივილეგირებული',
        'email_error': 'გთხოვთ შეივანოთ ვალიდური ელ. მისამართი',
        'confirm_password_error': 'პაროები არ ემთხვევა ერთმანეთს',
        'language': 'ენა',
        'telephone-number': 'ტელეფონის ნომერი: 555 555 333',
        'quentin_tarantino': 'ქვენტინ ტარანტინო'
    },
    'en': {
        'email': 'Email Address',
        'password': 'Password',
        'confirm_password': 'Confirm Password',
        'username': 'Username',
        'country': 'Country',
        'city': 'City',
        'phone_number': 'Phone Number',
        'homepage': 'Homepage',
        'main_information': 'Main Information',
        'contact': 'Contact',
        'authorization': 'Authorization',
        'registration': 'Registration',
        'about_us': 'About Us',
        'movies': 'Movies',
        'slide_0': 'Lorem Ipsum is simply dummy',
        'slide_1': 'Lorem Ipsum has been the industry',
        'slide_2': 'but also the leap into electronic',
        'slide_3': 'recently with desktop publishing',
        'slide_4': 'many variations of passages of Lorem Ipsum available',
        'email_error': 'This is not a valid email address',
        'confirm_password_error': 'Passwords do not match',
        'language': 'Language',
        'telephone-number': 'Telephone Number: 555 555 333',
        'quentin_tarantino': 'Quentin Tarantino'
    }
}

class Localization
{
    translatePage() {
        let locale = this.getLanguageCookie()

        if (!locale) {
            return
        }

        document.querySelectorAll("[data-i18n]").forEach(function (element) {
            const key = element.getAttribute("data-i18n")

            if (translations[locale][key] !== undefined) {
                element.innerText = translations[locale][key]
            }
        });
    }

    setLanguageCookie(languageCode) {
        document.cookie = `language=${languageCode}; path=/`
    }

    getLanguageCookie() {
        let name = 'language='
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');

        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];

            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }

            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }

        return null;
    }
}

let i18n = new Localization()
i18n.translatePage()
