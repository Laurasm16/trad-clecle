var botao = document.getElementById("ingles");
var traduzido = false;
var inicio = document.getElementById("inicio")
var agenda = document.getElementById("agenda")
var contato = document.getElementById("contato")
var bem = document.getElementById("bem-vindo")
var comu = document.getElementById("comu")
var text1 = document.getElementById("text1")
var text2 = document.getElementById("text2")
var text3 = document.getElementById("text3")
var alvo = document.getElementById("alvo")
var desc = document.getElementById("desc")


botao.addEventListener("click", function () {
    if (traduzido) {
        inicio.textContent = 'Início';
        agenda.textContent = 'Agenda';
        contato.textContent = 'Contato';
        bem.textContent = 'Bem-vindo à fala aí!';
        comu.textContent = 'Facilitando a Comunicação e Conectando Culturas';
        text1.textContent = 'Na nossa empresa de tradução, somos dedicados a facilitar a comunicação e conectar culturas ao redor do mundo. Oferecemos tradutores altamente qualificados para eventos agendados, tanto online quanto presenciais, através do nosso inovador aplicativo.';
        text2.textContent = 'Nosso serviço é voltado para surdos e estrangeiros, proporcionando-lhes a oportunidade de se comunicarem demaneira eficaz e sem barreiras.';
        text3.textContent = 'Oferecemos aulas e materiais de apoio para tradutores, uma agenda de eventos gerenciada por uma secretári dedicada e transporte para tradutores, quando necessário. Através do nosso aplicativo, você pode agenda tradutores, verificar dias disponíveis e consultar os preços de cada tradução com base no tempo e n localidade Nossa parceria com uma renomada escola de línguas nos permite oferecer ainda mais valor aos nossos clientes. Estamos aqui para tornar a comunicação mais acessível e eficiente para todos. Junte-se a nós e descubra com podemos ajudar você ou sua organização a se conectar com o mundo!';
        alvo.textContent = 'Público Alvo:';
        desc.textContent = 'Descrição dos Serviços:';
        botao.textContent = 'Click here to translate!';
    } else {
        inicio.textContent = 'Index';
        agenda.textContent = 'Schedule';
        contato.textContent = 'Contact';
        bem.textContent = 'Welcome to Our Translation Company!';
        comu.textContent = 'Facilitating Communication and Connecting Cultures';
        text1.textContent = 'At our translation company, we are dedicated to facilitating communication and connecting cultures around the world. We offer highly qualified translators for scheduled events, both online and in-person, through our innovative app.';
        text2.textContent = 'Our service is aimed at the deaf and foreign audiences, providing them with the opportunity to communicate effectively and without barriers.';
        text3.textContent = 'We offer classes and support materials for translators, an event schedule managed by a dedicated secretary, and transportation for translators when necessary. Through our app, you can schedule translators, check available dates, and view translation prices based on time and location. Our partnership with a renowned language school allows us to offer even more value to our clients. We are here to make communication more accessible and efficient for everyone. Join us and discover how we can help you or your organization connect with the world!';
        alvo.textContent = 'Target Audience:';
        desc.textContent = 'Service Description:';
        botao.textContent = 'Clique aqui  para voltar';
    }
    traduzido = !traduzido;
});
