function tirarDado(lados) {
    return Math.floor(Math.random() * lados) + 1;
}

function calcularRaciones(resultado) {
    if (resultado >= 1 && resultado <= 4) return { dado: 4, texto: "D4" };
    if (resultado >= 5 && resultado <= 7) return { dado: 6, texto: "D6" };
    if (resultado >= 8 && resultado <= 12) return { dado: 8, texto: "D8" };
    if (resultado >= 13 && resultado <= 16) return { dado: 10, texto: "D10" };
    if (resultado >= 17 && resultado <= 19) return { dado: 12, texto: "D12" };
    if (resultado >= 20) return { dado: 20, texto: "D20" };
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('pescaForm');
    const resultadosDiv = document.getElementById('resultados');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const dadoCompetencia = parseInt(document.getElementById('dadoCompetencia').value);
        const horas = parseInt(document.getElementById('horas').value);
        resultadosDiv.innerHTML = '';
        let totalRaciones = 0;

        for (let i = 1; i <= horas; i++) {
            const d20 = tirarDado(20);
            const competencia = tirarDado(dadoCompetencia);
            const resultado = d20 + competencia;
            const infoRacion = calcularRaciones(resultado);
            const raciones = tirarDado(infoRacion.dado);
            totalRaciones += raciones;

            resultadosDiv.innerHTML += `
                <div class="hora">
                    <strong>Hora ${i}:</strong><br>
                    D20 (${d20}) + D${dadoCompetencia} (${competencia}) = <strong>${resultado}</strong><br>
                    Raciones: Tira ${infoRacion.texto} → <strong>${raciones}</strong>
                </div>
            `;
        }

        resultadosDiv.innerHTML += `<h2>Total de raciones: ${totalRaciones}</h2>`;
    });
});
