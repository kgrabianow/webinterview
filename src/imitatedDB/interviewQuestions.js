export default {
  questions: [{
      id: 1,
      visible: true,
      answer: "",
      answerNote: "",
      question: "Czego ma dotyczyć strona internetowa?",
      answers: [
        "Strona Wizytówka",
        "Prosta Strona",
        "Strona Firmowa",
        "Portal",
        "Blog",
        "Strona Wydarzenia/Inwestycji",
        "Sklep Internetowy"
      ],
      conditionalQuestions: [],
      description: "Tutaj warto nadpisać jaka jest branża klienta, czym klient się zajmuje i to zapisać. Warto też zaznaczyć jak klient nazwał potrzebną mu stronę (nie sugerować odpowiedzi)."
    },
    {
      id: 2,
      visible: true,
      answer: "",
      answerNote: "",
      question: "Czy jest zaplanowana struktura zakładek/podstron/menu strony internetowej?",
      answers: [
        "Tak",
        "Tak, bardziej rozbudowana niż dotychczas",
        "Tak, mniej rozbudowana niż dotychczas",
        "Nie",
        "Nie, liczę na Państwa sugestie",
        "Strona Główna, Aktualności, O nas, Oferta, Galeria, Kontakt",
        "Nie wiem"
      ],
      conditionalQuestions: [],
      description: "Warto określić czy klient ma wizję na stronę internetową a właściwie na nawigację. Jeśli miał do tej pory jakąś stronę warto zapytać czy taka jak dotychczas z jakimiś zmianami, czy potrzebuje czegoś innego, itd. Możliwe, że klient wskaże stronę konkurecji i będzie chciał drobne zmiany."
    },
    {
      id: 3,
      visible: true,
      answer: "",
      answerNote: "",
      question: "Jaką funkcję ma pełnić strona internetowa?",
      answers: [
        "Informacyjna",
        "Sprzedażowa",
        "Pozyskiwanie zapytań",
        "Prośba o wycenę"
      ],
      conditionalQuestions: [],
      description: "Należy zapytać klienta do czego jest mu potrzebna strona. Czy ma pełnić funkcję reprezentacyjną, czy w celu nakłonienia potencjalnego klienta do złożenia zapytania/prośby o wycenę itd."
    },
    {
      id: 4,
      visible: true,
      answer: "",
      answerNote: "",
      question: "Jakiego rodzaju klienci korzystają z Państwa usług/produktów?",
      answers: [
        "Wszyscy",
        "Klienci z Polski",
        "Klienci z Polski i Zagranicy",
        "Klienci z Zagranicy",
        "Klienci indywiudalni",
        "Klienci firmowi",
        "Dyrektorzy techniczni / specjaliści",
        "Nie wiem"
      ],
      conditionalQuestions: [],
      description: "Dobrze aby klient określił kto będzie najprawdopodoniej korzystał ze strony, jeśli ma informacje z FB lub GA to bardzo dobrze, jak nie to niech powie jak mu się wydaje, jakie ma odczucia/dośiwadczenia. Przykładowe kryteria: (wiek, płeć, stanowisko, zainteresowania, klienci indywidualni/firmy, małe firmy, korporacje)"
    },
    {
      id: 5,
      visible: true,
      answer: "",
      answerNote: "",
      question: "Czy istnieje wizja na wygląd/strukturę strony głównej?",
      answers: [
        "Tak",
        "Nie",
        "Nie, liczę na Państwa sugestie",
        "Chcę slider",
        "Chcę aktualności",
        "Chcę produkty",
        "Nie wiem"
      ],
      conditionalQuestions: [],
      description: "Należy pamiętać, że w większości przypadków strona główna to 70-80% całej strony internetowej. Warto dowiedzieć się, co klient chce zaprezentować na stonie głównej, na czym mu zależy. Można dopytać o menu, stopkę, treść, ogólnie co ma być prezentowane na wejściu."
    },
    {
      id: 6,
      visible: true,
      answer: "",
      answerNote: "",
      question: "Czy na stronie mają być prezentowane usługi czy produkty?",
      answers: [
        "Usługi",
        "Produkty",
        "Usługi i Produkty",
      ],
      conditionalQuestions: [
        [7, 8, 9, 10, 11],
        [12, 13, 14, 15, 16, 17, 18, 19],
        [12, 13, 14, 15, 16, 17, 18, 19]
      ],
      description: "Klient powinien określić jakiego rodzaju działalność świadczy. Czy ma ona charakter usługowy, na zamówienie, czy sprzedaje gotowe produkty jak w sklepie. Dzięki temu też można zweryfikować na czym klient zarabia i czym poszczególne usługii produkty się różnią oraz czym w ogóle są."
    },
    {
      id: 7,
      visible: false,
      answer: "",
      answerNote: "",
      question: "Czy będą kategorie lub podkategorie usług?",
      answers: [
        "Kategorie",
        "Podkategorie",
        "Usługi bez kategorii",
        "Nie wiem"
      ],
      conditionalQuestions: [],
      description: "Za pomocą tego pytania można określić jak bardzo zagnieżdżona będzie struktura usług. Usługi -> Kategoria -> Podkategoria -> Usługa."
    },
    {
      id: 8,
      visible: false,
      answer: "",
      answerNote: "",
      question: "Jakie kategorie usług są przewidywane, są w jakiś sposób pogrupowane?",
      answers: [
        "Wszystkie kategorie niezależne",
        "Usługii dzielą się na ...",
        "Do ustalenia ...",
        "Nie wiem"
      ],
      conditionalQuestions: [],
      description: "Za pomocą tego pytania idzie doprecyzować poprzednią odpowiedź oraz określić czy usługii mają być ze sobą w jakiś specyficzny sposób połączone."
    },
    {
      id: 9,
      visible: false,
      answer: "",
      answerNote: "",
      question: "Usługi mają być prezentowane poprzez: tytuł/nazwę, opis, galerię zdjęć, czy w inny sposób?",
      answers: [
        "Tak",
        "Tak, jeszcze filmy",
        "Jeszcze aby było ...",
        "Nie wiem"
      ],
      conditionalQuestions: [],
      description: "Poprzez to pytanie jest szansa, że klient wymieni więcej swoich usług, lub doprecyzuje czy mają być jakoś połączone. (Na przykład integracje z Allegro, wyświetlanie powiązanych artykułów, itd.)"
    },
    {
      id: 10,
      visible: false,
      answer: "",
      answerNote: "",
      question: "Czy ma być do każdej usługii dodany formularz 'Zapytaj o wycenę'?",
      answers: [
        "Tak",
        "Tak, dla każdej usługii",
        "Nie",
        "Nie wiem"
      ],
      conditionalQuestions: [],
      description: "W ten sposób idzie często określić czy klientowi zależy aby ludzie do niego pisali, czy dzwonili oraz jak bardzo rozbudowane mają być formularze zapytania. Samo zapytanie czy w tym miejscu mają być umieszczone formularze sprawi, że klient będzie wiedział iż strona jest projektowana z myślą o nim i o tym by generowała zapytania."
    },
    {
      id: 11,
      visible: false,
      answer: "",
      answerNote: "",
      question: "Czy przewidywane są płatności online poprzez stronę (przelewy24, PayU, TPay, etc.)?",
      answers: [
        "Tak, nie wiem jakie",
        "Przelewy24",
        "PayU",
        "TPay",
        "Wszystkie co wymieniono",
        "Nie wiem"
      ],
      conditionalQuestions: [],
      description: "W ten sposób można zweryfikować czy na pewno mają być tylko usługi, czy też produkty. Dodatkowo klient zobaczy, że na stronie można zrealizować wiele możliwości automatyzacji poprzez sprzedaż usług online (zapis na szkolenia, bony przedpłacone, opłata za audyt/usługę, etc.)"
    },
    {
      id: 12,
      visible: false,
      answer: "",
      answerNote: "",
      question: "Czy będą kategorie lub podkategorie produktów?",
      answers: [
        "Kategorie",
        "Podkategorie",
        "Produkty bez kategorii",
        "Nie wiem"
      ],
      conditionalQuestions: [],
      description: "Za pomocą tego pytania można określić jak bardzo zagnieżdżona będzie struktura usług. Produkty -> Kategoria -> Podkategoria -> Produkt."
    },
    {
      id: 13,
      visible: false,
      answer: "",
      answerNote: "",
      question: "Jakie kategorie są przewidziane, podział na marki, rodzaj, zastosowanie?",
      answers: [
        "Względem marek",
        "Względem producenta",
        "Względem zastosowania",
        "Względem ...",
        "Nie wiem"
      ],
      conditionalQuestions: [],
      description: "Za pomocą tego pytania można określić jak mają być podzielone produkty i czym się w ogóle różnią, co warto wyszczególnić."
    },
    {
      id: 14,
      visible: false,
      answer: "",
      answerNote: "",
      question: "Jak ma być przedstawiony produkt? (Nazwa, opis, zdjęcia, cena), Czy coś jeszcze?",
      answers: [
        "Tak",
        "Tak, jeszcze wymiar",
        "Jeszcze aby było ...",
        "Nie wiem"
      ],
      conditionalQuestions: [],
      description: "Poprzez to pytanie jest szansa, że klient wymieni więcej swoich produktów, lub doprecyzuje czy mają być jakoś połączone.  (Na przykład integracje z Allegro, wyświetlanie podobnych produktów, itd.) Jest szansa, że wskaże cechę wspólną, którą posiadają wszystkie produkty."
    },
    {
      id: 15,
      visible: false,
      answer: "",
      answerNote: "",
      question: "Czy jest jakiś parametr lub cecha, którą posiadają wszystkie produkty?",
      answers: [
        "Tak, jest to ...",
        "Nie",
        "Nie wiem"
      ],
      conditionalQuestions: [],
      description: "W ten sposób można określić czy produkty można po jakimś kryterium grupować/filtrować, czy mają wspólne cechy (na przykład szerokość, pojemność, etc.)"
    },
    {
      id: 16,
      visible: false,
      answer: "",
      answerNote: "",
      question: "Czy z poziomu listy produktów ma być możliwość ich filtrowania, na przykład względem, wagi, długości, szerokości, etc.?",
      answers: [
        "Po cenie",
        "Po producencie",
        "Nie",
        "Nie wiem"
      ],
      conditionalQuestions: [],
      description: "Poprzez to pytanie można określić, jak produkty się różnią i jak mają być ze sobą połączone oraz prezentowane na stronie."
    },
    {
      id: 17,
      visible: false,
      answer: "",
      answerNote: "",
      question: "Czy ma być możliwość płatności online poprzez stronę za dany produkt (przelewy24, PayU, TPay, etc.)?",
      answers: [
        "Tak, nie wiem jakie",
        "Przelewy24",
        "PayU",
        "TPay",
        "Wszystkie co wymieniono",
        "Nie wiem"
      ],
      conditionalQuestions: [],
      description: "W ten sposób można zweryfikować czy klient w efekcie chce sklep czy stronę z produktami i prośbami o wycenę. W ten sposób można pokazać, że płatności można dodać później."
    },
    {
      id: 18,
      visible: false,
      answer: "",
      answerNote: "",
      question: "Czy ma być do każdego produktu dodany formularz 'Zapytaj o ten produkt'?",
      answers: [
        "Tak",
        "Tak, dla każdego produktu",
        "Nie",
        "Nie wiem"
      ],
      conditionalQuestions: [],
      description: "W ten sposób idzie często określić czy klientowi zależy aby ludzie do niego pisali, czy dzwonili, czy mają od razu kupować na stronie oraz jak bardzo rozbudowane mają być formularze zapytania. Samo zapytanie czy w tym miejscu mają być umieszczone formularze sprawi, że klient będzie wiedział iż strona jest projektowana z myślą o nim i o tym by generowała zapytania."
    },
    {
      id: 19,
      visible: false,
      answer: "",
      answerNote: "",
      question: "Czy przewidywane są inne sposoby prezentacji/sprzedaży produktów, którego nie omówiliśmy jeszcze? Na przykład produkty podobne, zestawy produktów, etc.",
      answers: [
        "Produkty podobne",
        "Produkty z tej kategorii",
        "Zestawy",
        "Nie wiem"
      ],
      conditionalQuestions: [],
      description: "W ten sposób można określić, czy produkty będą sprzedawane jeszcze w jakiś inny sposbób, czy można je jakoś ze sobą łączyć tworząc zestawy, czy ma być tylko koszyk, etc."
    },
    {
      id: 20,
      visible: true,
      answer: "",
      answerNote: "",
      question: "Czy produkty lub usługi mają być jeszcze w jakiś inny sposób prezentowane niż omówiliśmy dotychczas, czy mają ich opisy zawierać coś szczególnego?",
      answers: [
        "Usługi",
        "Produkty",
        "Usługi i Produkty",
      ],
      conditionalQuestions: [],
      description: "Za pomocą tego pytania można pozyskać informacje, czy na jakiejś specjalnej funkcjonalności mu zależy. Jest możliwe, że powie o czymś co uznaje za oczywiste a może mieć wpływ na wycenę."
    },
    {
      id: 21,
      visible: true,
      answer: "",
      answerNote: "",
      question: "Czy na stronie ma być zakładka aktualności lub blog z artykułami / wpisami?",
      answers: [
        "Aktualności",
        "Blog",
        "Nie",
        "Nie wiem"
      ],
      conditionalQuestions: [
        [22, 23, 24, 25, 26],
        [22, 23, 24, 25, 26]
      ],
      description: "Dobrze jest zweryfikować czy klient chce na bieżąco dodawać treści na stronie w formie artykułów. Oprócz samej zawartości merytorycznej wpisów ich obecność lub nawet sama możliwość ich dodawania ma znaczenie w kontekście pozycjonowania strony."
    },
    {
      id: 22,
      visible: false,
      answer: "",
      answerNote: "",
      question: "Poszczególny wpis/artykuł ma się składać z tytułu, zdjęcia wyróżniającego, krótkiego opisu, tresći, czy czegoś jeszcze?",
      answers: [
        "Tytuł, zdjęcie, krótki opis, treść",
        "I jeszcze ...",
        "Nie wiem"
      ],
      conditionalQuestions: [],
      description: "W ten sposób można zweryfikować, co klient rozumie poprzez wpis/artykuł/blo/aktualności, czy chce daty, komentarze, etc."
    },
    {
      id: 23,
      visible: false,
      answer: "",
      answerNote: "",
      question: "Czy wpisy/artykuły mają być podzielone na kategorie, czy prezentowane zbiorczo?",
      answers: [
        "Zbiorczo",
        "Kategorie",
        "Podkategorie",
        "Nie wiem"
      ],
      conditionalQuestions: [],
      description: "Pytanie pozwala na określenie podziału wpisów i pozwala oszacować jak często klient będzie z tego korzystał i jak bardzo jest mu to potrzebne."
    },
    {
      id: 24,
      visible: false,
      answer: "",
      answerNote: "",
      question: "Czy w formie skróconej, na przykład w formie boxów/kafelków wpisy mają się znaleźć na stronie głównej?",
      answers: [
        "Tak",
        "Nie",
        "Nie wiem"
      ],
      conditionalQuestions: [],
      description: "W ten sposób można oszacaować, jak istotne są dla klienta wpisy i może określić co planuje w nich opisywać. (Na przykład prezentacja wpisów na stronie głównej tylko z danej kategorii.). Można dookreślić czy mają się wyświetlać na przykład najnowsze, czy tylko wskazane wpisy z poziomu Panelu."
    },
    {
      id: 25,
      visible: false,
      answer: "",
      answerNote: "",
      question: "Czy ma być włączona możliwość dodawania komentarzy do wpisów/artykułów?",
      answers: [
        "Tak",
        "Nie",
        "Nie wiem"
      ],
      conditionalQuestions: [],
      description: "Pytanie pozwala na dookreślenie co klient rozumie poprzez blog/aktualności i jak chce je wykorzystywać i czy chce moderować. Jeśli chce mieć komentarze i zasugeruje się aby dodawane były po zatwierdzeniu z poziomu Panelu administratora, pokazuje się klientowi, że dba się o jego stronę."
    },
    {
      id: 26,
      visible: false,
      answer: "",
      answerNote: "",
      question: "Czy mają być wyświetlane/przypisywane podobne/powiązane wpisy?",
      answers: [
        "Tak",
        "Nie",
        "Nie wiem"
      ],
      conditionalQuestions: [],
      description: "W ten sposób można określić jak bardzo i w jaki sposób wpisy mają być między sobą połączone, czy mają być tylko przypisane do kategorii, czy połączone w dodatkowe grupy."
    },
    {
      id: 27,
      visible: true,
      answer: "",
      answerNote: "",
      question: "Czy na stronie ma być prezentowana galeria realizacji, jeśli tak to czy mają być jakoś podzielone, czy jako zbiorcza galeria zdjęć?",
      answers: [
        "Tak, jako zbiorcza galeria",
        "Tak, z podziałem na kategorie",
        "Nie",
        "Nie wiem"
      ],
      conditionalQuestions: [],
      description: "Często klienci chcą za pomocą zdjęć przedstawić swoje realizacje, na przykład wybudowane budynki, wykonane remonty lub opisać inwestycje w których brali współudział. Jeśli na stronie sprzedawane są zarówno gotowe produkty jak i produkty na wymiar / zamówienie też można je w ten sposób przedstawić. Tak samo tyczy to się renowacji, napraw (przed/po)."
    },
    {
      id: 28,
      visible: true,
      answer: "",
      answerNote: "",
      question: "Czy przewidywane są wersje językowe strony, czy ma być tylko jedna? Polska? Angielska?",
      answers: [
        "Jedna (polska)",
        "Jedna (angielska)",
        "Dwie (polska, angielska)",
        "Kilka (polska, angielska, ...)",
        "Jedna z możliwością rozszerzenia w przyszłości",
        "Nie"
      ],
      conditionalQuestions: [],
      description: "Wersje językowe strony pozwalają na określenie obszaru działań klienta. Czasem potrzebne jest pełne wersjonowanie strony a czasami wystarczy jedna osobna zakładka / podstrona."
    },
    {
      id: 29,
      visible: true,
      answer: "",
      answerNote: "",
      question: "Czy na stronie ma być obsługa kuponów rabatowych, promocji, bonów, kart przedpłaconych, etc.?",
      answers: [
        "Tak",
        "Nie",
        "Nie wiem"
      ],
      conditionalQuestions: [],
      description: "Wersje językowe strony pozwalają na określenie obszaru działań klienta. Czasem potrzebne jest pełne wersjonowanie strony a czasami wystarczy jedna osobna zakładka / podstrona."
    },
    {
      id: 30,
      visible: true,
      answer: "",
      answerNote: "",
      question: "Czy do strony mają być podpięte jakieś strony zewnętrzne, integracje, etc.?",
      answers: [
        "Facebook",
        "Google Maps",
        "GA",
        "Facebook + Google Maps",
        "Facebook + Google Maps + GA",
        "Nie",
        "Nie wiem"
      ],
      conditionalQuestions: [],
      description: "Przez to pytanie można zweryfikować co strona ma dodatkowo robić, czy klient wymaga podpięcia jakiś szczególnych funkcjonalności (np. zewnętrzna wyszukiwarka numeru VIN) czy tylko standardowych rzeczy."
    },
    {
      id: 31,
      visible: true,
      answer: "",
      answerNote: "",
      question: "Czy można nam wskazać strony internetowe firm konkurencyjnych z branży, lub strony, które wizualnie się podobają / odpowiadają i dlaczego?",
      answers: [
        "Tak, strony z branży: ...",
        "Tak, ładne strony: ...",
        "Nie bardzo / Nie wiem"
      ],
      conditionalQuestions: [],
      description: "O gustach się nie dyskutuje, a na podstawie przykładów zarówno od strony wizualnej jak i merytorycznej można okreslić czego klient oczekuje, co mu się podoba. Bardzo podobne, że wskaże element, lub elementy, które mają dla niego znaczenie."
    },
    {
      id: 32,
      visible: true,
      answer: "",
      answerNote: "",
      question: "Czy coś jeszcze mam / mamy uwzględnić odnośnie strony, o czym nie rozmawialiśmy?",
      answers: [
        "Tak, ...",
        "Nie",
        "Chyba wszystko"
      ],
      conditionalQuestions: [],
      description: "W tym momencie klient możliwe, że wspomni o aspekcie, który został 'pominięty' lub wymieni/wskaże, te które mają dla niego największą wartość, znaczenie."
    },
  ]
}
