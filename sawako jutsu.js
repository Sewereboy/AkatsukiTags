$('nomedojutsu').each(function() { var blockHTML = '<div class="materia jutsu" style="background-image: url(https://narutorpgakatsuki.com/database/criados/sekiro/kamishokunohaki.png);">' + '<div class="descricao nomedojutsu"></div></div>'; $(this).replaceWith(blockHTML); });

$("div.nomedojutsu").replaceWith("<info><b>nome</b><br/><b>Classificação:</b> classe<br/><b>Requerimentos:</b> requerimentos<br/><b>Rank:</b> rank<br/><b>Selos:</b> selos<br/><b>Custo:</b> custo<br/><b>Alcance:</b> alcance<br/><b>Duração:</b> duração<br/><b>Descrição:</b> descrição<br/><b>Regras Especiais:</b> regra especial</info>");