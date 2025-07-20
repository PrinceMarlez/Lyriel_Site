    function adicionarCampo() {
      const container = document.getElementById("acompanhantes-container");

      const box = document.createElement("div");
      box.className = "acompanhante-box";

      const input = document.createElement("input");
      input.type = "text";
      input.className = "acompanhante-input";
      input.placeholder = "Nome do acompanhante";

      const btn = document.createElement("button");
      btn.className = "remover-btn";
      btn.textContent = "❌";
      btn.onclick = function () {
        container.removeChild(box);
      };

      box.appendChild(input);
      box.appendChild(btn);
      container.appendChild(box);
    }

    function enviarWhatsapp() {
      const nome = document.getElementById("nome").value.trim();
      if (!nome) {
        alert("Digite seu nome.");
        return;
      }

      const inputs = document.querySelectorAll(".acompanhante-input");
      const nomes = Array.from(inputs)
        .map(input => input.value.trim())
        .filter(nome => nome !== "");

      let mensagem = `Olá! Aqui é ${nome}. Confirmo minha presença no aniversário .`;

      if (nomes.length > 0) {
        mensagem += `\nEstarei acompanhado por:\n` + nomes.map(n => `° ${n}`).join('\n');
      }

      const link = `https://wa.me/5598984616626?text=${encodeURIComponent(mensagem)}`;
      window.open(link, "_blank");
    }

