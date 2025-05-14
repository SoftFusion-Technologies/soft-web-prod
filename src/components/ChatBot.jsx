import React, { useState, useEffect, useRef } from 'react';

const ChatBot = ({ closeModal }) => {
  // Estado para almacenar el historial de mensajes, incluye mensaje de bienvenida
  const [chatHistory, setChatHistory] = useState([
    {
      sender: 'bot',
      message:
        '¡Hola! Bienvenido al bot de SoftFusion. Estoy aquí para ayudarte con nuestras soluciones. ¿En qué te puedo ayudar hoy?'
    }
  ]);

  // Referencia al contenedor del historial de mensajes
  const chatContainerRef = useRef(null);

  // Desplazamiento automático hacia el último mensaje
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);

  // Opciones de preguntas predefinidas
  const options = [
    '¿Qué servicios ofrecen?',
    '¿Cómo puedo contratar un servicio?',
    '¿Qué es un sistema de ventas y gestión de stock?',
    '¿Cómo funcionan los sitios web y e-commerce?',
    '¿Qué es un landing page?',
    '¿Cómo mejoran las redes sociales en mi negocio?',
    '¿Qué es el marketing digital y cómo me ayuda?',
    '¿Cómo puedo contactarlos?' // Nueva opción
  ];

  // Descripción de los servicios
  const services = [
    {
      title: 'Sistemas de Ventas y Gestión de Stock',
      description:
        'Optimizamos la operación de tu negocio con sistemas inteligentes que controlan ventas, stock, caja y clientes en tiempo real. Automatiza procesos y toma decisiones basadas en datos.'
    },
    {
      title: 'Sitios Web Gestionables y E-commerce',
      description:
        'Diseñamos sitios web autoadministrables, tiendas online y landing pages enfocadas en conversión. Control total del contenido y ventas desde cualquier dispositivo.'
    },
    {
      title: 'Landing Pages que Venden',
      description:
        'Una buena primera impresión vende. Creamos landing pages estratégicas que potencian tus campañas y aumentan tus conversiones hasta un 300%.'
    },
    {
      title: 'Community Management & Filmmaker',
      description:
        'Gestionamos tus redes sociales de forma profesional, generamos contenido visual atractivo (videos, reels, fotografía) y aumentamos tu presencia digital.'
    },
    {
      title: 'Crecimiento y Posicionamiento',
      description:
        'Aplicamos tecnología y estrategias de marketing digital para escalar tu negocio, fidelizar clientes y construir una marca sólida y memorable.'
    }
  ];

  // Respuestas predefinidas del bot
  const botResponses = {
    '¿Qué servicios ofrecen?': services
      .map(
        (service, index) => `
        <strong>${service.title}</strong>: ${service.description}<br><br>
      `
      )
      .join(''),
    '¿Cómo puedo contratar un servicio?':
      'Para contratar nuestros servicios, por favor contáctanos a través de WhatsApp o visita nuestra página web para más detalles.',
    '¿Qué es un sistema de ventas y gestión de stock?':
      'Es un sistema diseñado para automatizar la gestión de ventas, stock, caja y clientes, permitiéndote tomar decisiones estratégicas basadas en datos en tiempo real.',
    '¿Cómo funcionan los sitios web y e-commerce?':
      'Creamos sitios web personalizables que permiten una fácil administración de contenido. Además, las tiendas en línea permiten gestionar productos, ventas y clientes de manera eficiente.',
    '¿Qué es un landing page?':
      'Es una página web diseñada específicamente para convertir visitantes en clientes. Se utiliza en campañas publicitarias y como una herramienta para captar leads o ventas.',
    '¿Cómo mejoran las redes sociales en mi negocio?':
      'Gestionamos tus redes sociales para mejorar tu presencia digital. Generamos contenido visual atractivo, como videos y fotografía, para aumentar la interacción y las ventas.',
    '¿Qué es el marketing digital y cómo me ayuda?':
      'El marketing digital es un conjunto de estrategias online para aumentar la visibilidad de tu marca, atraer clientes y fidelizarlos. Ayuda a construir una audiencia sólida y aumentar las conversiones.',
    '¿Cómo puedo contactarlos?':
      'Puedes contactarnos a través de WhatsApp o nuestras redes sociales. Estaremos encantados de ayudarte.',
    default: 'Lo siento, no entiendo esa pregunta. ¿Podrías reformularla?'
  };

  // Función para manejar el clic en las opciones
  const handleOptionClick = (message) => {
    // Agregar el mensaje del usuario al historial
    setChatHistory((prev) => [...prev, { sender: 'user', message }]);

    // Generar respuesta del bot
    const response = botResponses[message] || botResponses['default'];
    setChatHistory((prev) => [...prev, { sender: 'bot', message: response }]);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-[#151030] rounded-xl p-6 w-96 max-w-4xl h-[600px] relative overflow-hidden shadow-lg transform transition-all ease-in-out duration-300">
        <button
          className="absolute top-2 right-2 text-2xl font-bold text-white hover:text-red-600 transition-all"
          onClick={closeModal}
        >
          &times;
        </button>

        <div className="mb-6 text-center">
          <h1 className="text-3xl text-red-500 font-semibold tracking-tight">
            Soporte Automático Soft Fusion
          </h1>
        </div>

        {/* Historial de conversación */}
        <div
          className="h-64 overflow-y-auto mb-6 space-y-4"
          ref={chatContainerRef}
        >
          {chatHistory.map((chat, index) => (
            <div
              key={index}
              className={`text-sm px-4 py-2 rounded-lg shadow-md transition-all ${
                chat.sender === 'user'
                  ? 'bg-blue-500 text-white text-right'
                  : 'bg-gray-700 text-white text-left'
              }`}
              dangerouslySetInnerHTML={{ __html: chat.message }}
            />
          ))}
        </div>

        {/* Opciones de preguntas */}
        <div className="space-y-2.5 overflow-x-hidden max-h-[200px]">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(option)}
              className="w-full px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all transform hover:scale-105"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
