import { useState } from 'react';

const mensagensProntas = [
  "Olá! Sou Darlley, desenvolvedor web fullstack. Confira meu perfil no LinkedIn: https://www.linkedin.com/in/darlleybrito/ 👨‍💻",
  "Quer ver meus projetos? Dê uma olhada no meu GitHub: https://github.com/Darlley 🚀",
  "Interessado em meus serviços? Veja meu currículo completo: https://darlley.github.io/curriculo/ 📄",
  "Precisa do meu contato? Meu e-mail é darlleybrito@gmail.com 📧",
  "Conheça mais sobre mim e meu trabalho: https://darlley.github.io/ 🌐"
];

function App() {
  const [mensagemCopiada, setMensagemCopiada] = useState('');

  const copiarMensagem = async (mensagem: string) => {
    try {
      await navigator.clipboard.writeText(mensagem);
      setMensagemCopiada(mensagem);
      setTimeout(() => setMensagemCopiada(''), 2000); // Limpa a mensagem após 2 segundos
    } catch (error) {
      console.error('Erro ao copiar mensagem:', error);
    }
  };

  return (
    <div className="flex min-w-[400px] flex-col p-4 bg-[#ECE5DD]">
      <h1 className="text-lg font-semibold mb-2 text-[#075E54]">Mensagens Rápidas</h1>
      <ul className="space-y-1 w-full">
        {mensagensProntas.map((msg, index) => (
          <li key={index} className="flex items-center justify-between bg-white p-2 rounded-md text-sm w-full">
            <span className="text-[#075E54] truncate mr-2">{msg}</span>
            <button 
              onClick={() => copiarMensagem(msg)}
              className="px-2 py-1 bg-[#25D366] text-white text-xs rounded-full hover:bg-[#128C7E] focus:outline-none"
            >
              {mensagemCopiada === msg ? '✓' : 'Copiar'}
            </button>
          </li>
        ))}
      </ul>
      {mensagemCopiada && (
        <p className="mt-2 text-xs text-[#128C7E]">Copiado!</p>
      )}
    </div>
  );
}

export default App;
