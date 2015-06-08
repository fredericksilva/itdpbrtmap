// TransOlímpica Segurança Viária Crítico
TO_SV_CR = [
  {
    "type": "Feature",
    "properties": {
      "Name": "Fluxo de pedestres no entorno das estações",
      "Description": "Intenso fluxo nos terminais aumentam o risco de conflitos entre veículos e pedestres.",
      "Recommendation": "Implementação de travessias mais seguras, medidas de moderação de tráfego e sinalização.",
      "Corridor": "TransOlímpica",
      "Level": "high",
      "Place": "Terminal Salvador Allende",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-43.440932600999986, -23.008588654999983, 0.0]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "Name": "Fluxo de pedestres no entorno das estações",
      "Description": "Intenso fluxo nos terminais aumentam o risco de conflitos entre veículos e pedestres.",
      "Recommendation": "Implementação de travessias mais seguras, medidas de moderação de tráfego e sinalização.",
      "Corridor": "TransOlímpica",
      "Level": "high",
      "Place": "Terminal Deodoro",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-43.384866488999933, -22.855712567999944, 0.0]
    }
  }
];

// TransOlímpica Segurança Viária Atenção
TO_SV_AT = [
  {
    "type": "Feature",
    "properties": {
      "Name": "Alinhamento de pontos nas linhas alimentadoras",
      "Description": "Nos sistemas em operação na cidade, alguns pontos de linhas de ônibus alimentadoras e travessias de pedestres remanesceram desalinhados das estações do BRT, o que força os pedestres a caminhar mais do que o necessário e estimula travessias perigosas.",
      "Recommendation": "Alinhamento das estações de ônibus alimentadoras com as estações do sistema.",
      "Corridor": "TransOlímpica",
      "Level": "mid",
      "Place": "Estação Bandeirantes",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-43.393630205999955, -22.963105792999954, 0.0]
    }
  }
];

// TransOlímpica Integração Modal Crítico
TO_IM_CR = [
  {
    "type": "Feature",
    "properties": {
      "Name": "Integração entre BRTs e trens",
      "Description": "Integração física entre os corredores TransBrasil e TransOlímpica com os trens metropolitanos no Terminal Deodoro.",
      "Recommendation": "Integração tarifária por meio do Bilhete Único; integração operacional com chegadas/partidas sincronizadas e sistema de informação em tempo real; integração física com proteção contra intempéries e acessibilidade universal; implantação de sistema de monitoramento da qualidade.",
      "Corridor": "TransOlímpica",
      "Level": "high",
      "Place": "Terminal Deodoro",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-43.384866488999933, -22.855712567999944, 0.0]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "Name": "Sistema de informações adequado",
      "Description": "A comunicação de informações de forma estática ou em tempo real ainda não é satisfatória nos corredores TransOeste e TransCarioca. Com mais 2 corredores, o sistema ficará ainda mais complexo.",
      "Recommendation": "Sistema de informações simples, unificado e preciso, que dê facilidades para o usuário se localizar na cidade e escolher dentre os serviços disponíveis para atingir seu destino.",
      "Corridor": "TransOlímpica",
      "Level": "high",
      "Place": "Centro de Controle Operacional (Terminal Alvorada)",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-43.36409, -23.00076, 0.0]
    }
  }
];

// TransOlímpica Integração Modal Atenção
TO_IM_AT = [
  {
    "type": "Feature",
    "properties": {
      "Name": "Falta de detalhamento da integração física entre BRT TransOeste e BRT TransOlímpica",
      "Description": "Estão previstas uma estação e um terminal no mesmo local (Salvador Allende), uma para cada sistema de BRT (TransOeste e TransOlímpica). Contudo, falta detalhamento de projeto para entender se de fato haverá integração física entre eles.",
      "Recommendation": "Analisar a viabilidade de adequação do BRT TransOlímpica para melhor integração com o BRT TransOeste.",
      "Corridor": "TransOlímpica",
      "Level": "mid",
      "Place": "Terminal Salvador Allende",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-43.441738052999938, -23.008029636999936, 0.0]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "Name": "Integração com linhas alimentadoras",
      "Description": "Está prevista integração entre o BRT TransBrasil e BRT TransOlímpica com o sistema de linhas alimentadoras. Para ser efetiva, essa integração precisa atender com qualidade locais com intensa concentração de linhas e grande número de veículos.",
      "Recommendation": "Atenção à integração física com proteção contra intempéries; à integração operacional com a chegadas e partidas sincronizadas; e informação do quadro de horário das linhas alimentadoras.",
      "Corridor": "TransOlímpica",
      "Level": "mid",
      "Place": "Terminal Sulacap",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-43.400357614999962, -22.885356719999947, 0.0]
    }
  }
];

// TransOlímpica Integração Modal Sugestão
TO_IM_SU = [
  {
    "type": "Feature",
    "properties": {
      "Name": "Falta de integração entre corredores de BRT",
      "Description": "Está prevista integração física por meio de terminais e viadutos nos dois BRTs. Porém, nestes pontos, os veículos podem adotar apenas uma direção, levando os passageiros a percorrer distâncias desnecessárias caso optem por seguir em outra direção. Provavelmente haverá um incremento na demanda dos corredores já operantes, como observado no BRT TransOeste após o início do TransCarioca.",
      "Recommendation": "Analisar a viabilidade de adequação para melhor integração entre corredores.",
      "Corridor": "TransOlímpica",
      "Level": "low",
      "Place": "Ligação entre TransOlímpica e TransCarioca",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-43.3940, -22.9732, 0.0]
    }
  }
];

// TransOlímpica Bicicleta e Pedestre Crítico
TO_BP_CR = [
  {
    "type": "Feature",
    "properties": {
      "Name": "Acessibilidade por caminhada no BRT TransOlímpica",
      "Description": "A via expressa TransOlímpica conta com 31 pontes e 25 viadutos, que criam não-lugares desestimulantes e perigosos à caminhada e diminuem a atratividade do transporte público.",
      "Recommendation": "A via não deveria ser uma pista expressa de carros, mas unicamente um corredor de BRT. Os projetos de melhoria dos entornos das estações devem ser elaborados com participação da população local e garantir a integração do sistema de BRT ao interior dos bairros por meio dos deslocamentos à pé.",
      "Corridor": "TransOlímpica",
      "Level": "high",
      "Place": "Estação Curicica",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-43.39111357899997, -22.951014365999978, 0.0]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "Name": "Acessibilidade por caminhada no BRT TransOlímpica",
      "Description": "A via expressa TransOlímpica conta com 31 pontes e 25 viadutos, que criam não-lugares desestimulantes e perigosos à caminhada e diminuem a atratividade do transporte público.",
      "Recommendation": "A via não deveria ser uma pista expressa de carros, mas unicamente um corredor de BRT. Os projetos de melhoria dos entornos das estações devem ser elaborados com participação da população local e garantir a integração do sistema de BRT ao interior dos bairros por meio dos deslocamentos à pé.",
      "Corridor": "TransOlímpica",
      "Level": "high",
      "Place": "Estação Marechal Mallet",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-43.405493704999962, -22.875942834999933, 0.0]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "Name": "Acessibilidade por caminhada no BRT TransOlímpica",
      "Description": "A via expressa TransOlímpica conta com 31 pontes e 25 viadutos, que criam não-lugares desestimulantes e perigosos à caminhada e diminuem a atratividade do transporte público.",
      "Recommendation": "A via não deveria ser uma pista expressa de carros, mas unicamente um corredor de BRT. Os projetos de melhoria dos entornos das estações devem ser elaborados com participação da população local e garantir a integração do sistema de BRT ao interior dos bairros por meio dos deslocamentos à pé.",
      "Corridor": "TransOlímpica",
      "Level": "high",
      "Place": "Estação Marechal Fontenelle",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-43.400357614999962, -22.885356719999947, 0.0]
    }
  }
];

// TransOlímpica Bicicleta e Pedestre Sugestão
TO_BP_SU = [
  {
    "type": "Feature",
    "properties": {
      "Name": "Acessibilidade por bicicletas no BRT TransOlímpica",
      "Description": "No BRT TransOlímpica há um grande potencial para uso da bicicleta como elemento integrador, pela proximidade dos bairros e pelo grande número de bicicletas estacionadas no entorno das estações.",
      "Recommendation": "Implementação de bicicletários seguros e malha cicloviária que ofereça ligações transversais aos bairros adjacentes. A infraestrutura cicloviária planejada deve considerar a conexão ao sistema de BRT, com o sistema de bicicletas compartilhadas sendo expandido para áreas atendidas pelo corredor.",
      "Corridor": "TransOlímpica",
      "Level": "low",
      "Place": "Guerenguê",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-43.37917, -22.92804, 0.0]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "Name": "Acessibilidade por bicicletas no BRT TransOlímpica",
      "Description": "No BRT TransOlímpica há um grande potencial para uso da bicicleta como elemento integrador, pela proximidade dos bairros e pelo grande número de bicicletas estacionadas no entorno das estações.",
      "Recommendation": "Implementação de bicicletários seguros e malha cicloviária que ofereça ligações transversais aos bairros adjacentes. A infraestrutura cicloviária planejada deve considerar a conexão ao sistema de BRT, com o sistema de bicicletas compartilhadas sendo expandido para áreas atendidas pelo corredor.",
      "Corridor": "TransOlímpica",
      "Level": "low",
      "Place": "Boiúna",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-43.3975213, -22.9148055, 0.0]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "Name": "Acessibilidade por bicicletas no BRT TransOlímpica",
      "Description": "No BRT TransOlímpica há um grande potencial para uso da bicicleta como elemento integrador, pela proximidade dos bairros e pelo grande número de bicicletas estacionadas no entorno das estações.",
      "Recommendation": "Implementação de bicicletários seguros e malha cicloviária que ofereça ligações transversais aos bairros adjacentes. A infraestrutura cicloviária planejada deve considerar a conexão ao sistema de BRT, com o sistema de bicicletas compartilhadas sendo expandido para áreas atendidas pelo corredor.",
      "Corridor": "TransOlímpica",
      "Level": "low",
      "Place": "Magalhães Bastos",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-43.4136384, -22.8725117, 0.0]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "Name": "Fluxo de pedestres no Terminal Deodoro",
      "Description": "O Terminal de Santa Cruz do BRTs TransOeste não foi dimensionado para comportar o fluxo de passageiros que recebe diariamente. É essencial que no Terminal Deodoro as plataformas, passarelas, escadas, roletas de acesso (e todos os elementos das estações) estejam dimensionados corretamente.",
      "Recommendation": "O planejamento arquitetônico e operacional dos terminais deve ser feito com base em diretrizes internacionais, como por exemplo, as do Guia de Planejamento de BRT.",
      "Corridor": "TransOlímpica",
      "Level": "low",
      "Place": "Terminal Deodoro",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-43.384866488999933, -22.855712567999944, 0.0]
    }
  }
];

// TransOlímpica TOD Crítico
TO_TD_CR = [
  {
    "type": "Feature",
    "properties": {
      "Name": "Pendularidade do corredor",
      "Description": "Dada a concentração de empregos e moradia em extremidades opostas dos corredores BRT TransBrasil e TransOlímpica, ambos tendem a apresentar grande pendularidade.",
      "Recommendation": "A implementação de medidas de Desenvolvimento Orientado ao Transporte (TOD) nos bairros de Deodoro e Magalhães Bastos pode reduzir a pendularidade desses corredores. Deve-se estudar quais usos podem gerar empregos e potencializar o desenvolvimento, aproveitando a convergência das rotas de BRT, trem e vias expressas já consolidadas.",
      "Corridor": "TransOlímpica",
      "Level": "high",
      "Place": "Magalhães Bastos",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-43.411706118999973, -22.870627728999974, 0.0]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "Name": "Pendularidade do corredor",
      "Description": "Dada a concentração de empregos e moradia em extremidades opostas dos corredores BRT TransBrasil e TransOlímpica, ambos tendem a apresentar grande pendularidade.",
      "Recommendation": "A implementação de medidas de Desenvolvimento Orientado ao Transporte (TOD) nos bairros de Deodoro e Magalhães Bastos pode reduzir a pendularidade desses corredores. Deve-se estudar quais usos podem gerar empregos e potencializar o desenvolvimento, aproveitando a convergência das rotas de BRT, trem e vias expressas já consolidadas.",
      "Corridor": "TransOlímpica",
      "Level": "high",
      "Place": "Deodoro",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-43.384866488999933, -22.855712567999944, 0.0]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "Name": "Melhorias no planejamento urbano",
      "Description": "As áreas no entorno do BRT TransOlímpica estão sob intensa reformulação com a construção de prédios estritamente residenciais.",
      "Recommendation": "O uso misto deve ser priorizado nos novos empreendimentos com, por exemplo, comércio de rua no andar térreo e salas de escritório e consultório no 1º andar, gerando fachadas mais ativas e mais deslocamentos à pé. Os entornos devem ser redesenhados para tornarem-se mais amigáveis à bicicleta e ao pedestre.",
      "Corridor": "TransOlímpica",
      "Level": "high",
      "Place": "Estação Boiúna",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-43.397626314999968, -22.916486034999934, 0.0]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "Name": "Melhorias no planejamento urbano",
      "Description": "As áreas no entorno do BRT TransOlímpica estão sob intensa reformulação com a construção de prédios estritamente residenciais.",
      "Recommendation": "O uso misto deve ser priorizado nos novos empreendimentos com, por exemplo, comércio de rua no andar térreo e salas de escritório e consultório no 1º andar, gerando fachadas mais ativas e mais deslocamentos à pé. Os entornos devem ser redesenhados para tornarem-se mais amigáveis à bicicleta e ao pedestre.",
      "Corridor": "TransOlímpica",
      "Level": "high",
      "Place": "Estação Colônia Juliano Moreira",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-43.395463310766004, -22.928850459731386, 0.0]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "Name": "Melhorias no planejamento urbano",
      "Description": "As áreas no entorno do BRT TransOlímpica estão sob intensa reformulação com a construção de prédios estritamente residenciais.",
      "Recommendation": "O uso misto deve ser priorizado nos novos empreendimentos com, por exemplo, comércio de rua no andar térreo e salas de escritório e consultório no 1º andar, gerando fachadas mais ativas e mais deslocamentos à pé. Os entornos devem ser redesenhados para tornarem-se mais amigáveis à bicicleta e ao pedestre.",
      "Corridor": "TransOlímpica",
      "Level": "high",
      "Place": "Estação Guerenguê",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-43.394788564003221, -22.938109807661363, 0.0]
    }
  }
];

// TransOlímpica TOD Atenção
TO_TD_AT = [
  {
    "type": "Feature",
    "properties": {
      "Name": "Ocupação ao longo do maciço da Pedra Branca",
      "Description": "O acesso promovido pela BRT TransOlímpica pode estimular a ocupação de áreas de proteção ambiental, ao longo do Parque Estadual da Pedra Branca.",
      "Recommendation": "A ocupação deve ser regulada e fiscalizada nos bairros já existentes localizados às margens do maciço.",
      "Corridor": "TransOlímpica",
      "Level": "mid",
      "Place": "Área de Proteção Ambiental da Pedra Branca",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-43.4729, -22.9319, 0.0]
    }
  }
];

// TransOlímpica TOD Sugestão
TO_TD_SU = [
  {
    "type": "Feature",
    "properties": {
      "Name": "Espraiamento na Av. Salvador Allende",
      "Description": "A região do entorno da Av. Salvador Allende se desenvolve de forma pouco compacta e pouco amigável à caminhada e ao uso da bicicleta. A expansão das faixas de rolamento neste trecho reforça o estímulo ao uso do carro.",
      "Recommendation": "O planejamento urbano, sob a forma de uma legislação urbanística sólida e articulada com as comunidades relacionadas, que incorpore os princípios do Desenvolvimento Orientado ao Transporte (TOD), é vital para o desenvolvimento sustentável das áreas atendidas.",
      "Corridor": "TransOlímpica",
      "Level": "low",
      "Place": "RioCentro",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-43.410110302999954, -22.981868516999953, 0.0]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "Name": "Melhorias no planejamento urbano",
      "Description": "O número original de remoções previsto para a construção deste corredor foi reduzido. A maior parte dos moradores das comunidades locais permaneceram em um ambiente urbano com pouca infraestrutura e devem ser prioridade no planejamento urbano.",
      "Recommendation": "Os entornos devem ser redesenhados para tornarem-se mais amigáveis à bicicleta e ao pedestre.",
      "Corridor": "TransOlímpica",
      "Level": "low",
      "Place": "Vila União de Curicica",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-43.39470, -22.95794, 0.0]
    }
  }
];

// TransBrasil Segurança Viária Crítico
TB_SV_CR = [
  {
    "type": "Feature",
    "properties": {
      "Name": "Fluxo de pedestres no entorno das estações",
      "Description": "Intenso fluxo nos terminais aumentam o risco de conflitos entre veículos e pedestres.",
      "Recommendation": "Implementação de travessias mais seguras, medidas de moderação de tráfego e sinalização.",
      "Corridor": "TransBrasil",
      "Level": "high",
      "Place": "Terminal Deodoro",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-43.384866488999933, -22.855712567999944, 0.0]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "Name": "Fluxo de pedestres no entorno das estações",
      "Description": "Intenso fluxo nos terminais aumentam o risco de conflitos entre veículos e pedestres.",
      "Recommendation": "Implementação de travessias mais seguras, medidas de moderação de tráfego e sinalização.",
      "Corridor": "TransBrasil",
      "Level": "high",
      "Place": "Terminal Margaridas",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-43.323199822999982, -22.820153657999981, 0.0]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "Name": "Fluxo de pedestres no entorno das estações",
      "Description": "Intenso fluxo nos terminais aumentam o risco de conflitos entre veículos e pedestres.",
      "Recommendation": "Implementação de travessias mais seguras, medidas de moderação de tráfego e sinalização.",
      "Corridor": "TransBrasil",
      "Level": "high",
      "Place": "Terminal Missões",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-43.290288016999966, -22.813862068999981, 0.0]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "Name": "Fluxo de pedestres no Centro",
      "Description": "A estação terminal do BRT TransBrasil está planejada para a região da Central do Brasil, local de intenso fluxo de pedestres e o maior índice de atropelamentos da cidade.",
      "Recommendation": "Estudo detalhado das travessias de pedestres na Av. Pres. Vargas e das soluções possíveis para a área central da cidade.",
      "Corridor": "TransBrasil",
      "Level": "high",
      "Place": "Terminal Procópio Ferreira",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-43.190349807307115, -22.904942777317853, 0.0]
    }
  }
];

// TransBrasil Segurança Viária Atenção
TB_SV_AT = [
  {
    "type": "Feature",
    "properties": {
      "Name": "Alinhamento de pontos nas linhas alimentadoras",
      "Description": "Nos sistemas em operação na cidade, alguns pontos de linhas de ônibus alimentadoras e travessias de pedestres remanesceram desalinhados das estações do BRT, o que força os pedestres a caminhar mais do que o necessário e estimula travessias perigosas.",
      "Recommendation": "Alinhamento das estações de ônibus alimentadoras com as estações do sistema.",
      "Corridor": "TransBrasil",
      "Level": "mid",
      "Place": "Estação Brás de Pina",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-43.284013429999959, -22.819559578999929, 0.0]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "Name": "Travessia de pedestres fora da passarela",
      "Description": "Pedestres atravessam fora das passarelas de forma rotineira, em diversos pontos da Av. Brasil.",
      "Recommendation": "Implementação de gradis nos pontos mais críticos.",
      "Corridor": "TransBrasil",
      "Level": "mid",
      "Place": "Estação Manguinhos",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-43.24302232499997, -22.87533465599995, 0.0]
    }
  }
];

// TransBrasil Integração Modal Crítico
TB_IM_CR = [
  {
    "type": "Feature",
    "properties": {
      "Name": "Integração entre BRTs e trens",
      "Description": "Integração física entre os corredores TransBrasil e TransOlímpica com os trens metropolitanos no Terminal Deodoro.",
      "Recommendation": "Integração tarifária por meio do Bilhete Único; integração operacional com chegadas/partidas sincronizadas e sistema de informação em tempo real; integração física com proteção contra intempéries e acessibilidade universal; implantação de sistema de monitoramento da qualidade.",
      "Corridor": "TransBrasil",
      "Level": "high",
      "Place": "Terminal Deodoro",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-43.384866488999933, -22.855712567999944, 0.0]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "Name": "Integração entre BRT TransBrasil e outros sistemas de transporte",
      "Description": "Integração efetiva entre o BRT TransBrasil com metrô, trens, VLT, teleférico e sistema de bicicletas compartilhadas no Terminal Central do Brasil, um dos maiores terminais intermodais de passageiros do mundo e fundamental para a mobilidade urbana da cidade do Rio de Janeiro.",
      "Recommendation": "Integração tarifária por meio do Bilhete Único; integração operacional com chegadas/partidas sincronizadas e sistema de informação; integração física com proteção contra intempéries e acessibilidade universal.",
      "Corridor": "TransBrasil",
      "Level": "high",
      "Place": "Terminal Procópio Ferreira",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-43.190349807307115, -22.904942777317853, 0.0]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "Name": "Conexões para outros municípios da Região Metropolitana",
      "Description": "Integração efetiva entre o BRT TransBrasil com as linhas de ônibus intermunicipais que atendem a Região Metropolitana, em especial a Baixada Fluminense, nos Terminais das Missões e das Margaridas.",
      "Recommendation": "Integração tarifária por meio do Bilhete Único; integração operacional com chegadas/partidas sincronizadas e sistema de informação em tempo real; integração física com proteção contra intempéries e acessibilidade universal; implantação de sistema de monitoramento da qualidade.",
      "Corridor": "TransBrasil",
      "Level": "high",
      "Place": "Terminal Margaridas",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-43.323199822999982, -22.820153657999981, 0.0]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "Name": "Conexões para outros municípios da Região Metropolitana",
      "Description": "Integração efetiva entre o BRT TransBrasil com as linhas de ônibus intermunicipais que atendem a Região Metropolitana, em especial a Baixada Fluminense, nos Terminais das Missões e das Margaridas.",
      "Recommendation": "Integração tarifária por meio do Bilhete Único; integração operacional com chegadas/partidas sincronizadas e sistema de informação em tempo real; integração física com proteção contra intempéries e acessibilidade universal; implantação de sistema de monitoramento da qualidade.",
      "Corridor": "TransBrasil",
      "Level": "high",
      "Place": "Terminal Missões",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-43.290288016999966, -22.813862068999981, 0.0]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "Name": "Desafio da operação",
      "Description": "No BRT TransBrasil, um dos maiores corredores de BRT do mundo, a gestão da frota para atender a grande quantidade de passageiros é um desafio operacional.",
      "Recommendation": "O plano operacional dos Terminais deve ser feito com base em diretrizes internacionais, como o Guia de Planejamento de BRT. Deve haver baias bem sinalizadas para os diferentes serviços e áreas para a gestão da frota no horário de pico. Pode-se estudar a automatização de despachos e o controle de distância entre os ônibus em tempo real.",
      "Corridor": "TransBrasil",
      "Level": "high",
      "Place": "Terminal Margaridas",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-43.323199822999982, -22.820153657999981, 0.0]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "Name": "Desafio da operação",
      "Description": "No BRT TransBrasil, um dos maiores corredores de BRT do mundo, a gestão da frota para atender a grande quantidade de passageiros é um desafio operacional.",
      "Recommendation": "O plano operacional dos Terminais deve ser feito com base em diretrizes internacionais, como o Guia de Planejamento de BRT. Deve haver baias bem sinalizadas para os diferentes serviços e áreas para a gestão da frota no horário de pico. Pode-se estudar a automatização de despachos e o controle de distância entre os ônibus em tempo real.",
      "Corridor": "TransBrasil",
      "Level": "high",
      "Place": "Terminal Missões",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-43.290288016999966, -22.813862068999981, 0.0]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "Name": "Falta de integração entre BRT TransBrasil e trens",
      "Description": "O BRT TransBrasil tem potencial para formar uma grande conexão transversal entre diversos ramais de trem e metrô. Porém, não está prevista integração física entre o BRT TransBrasil e as estações de trem de Parada de Lucas e Barros Filho, que se encontram a apenas 300m e 500m do corredor, respectivamente.",
      "Recommendation": "Analisar a viabilidade de adequação do BRT TransBrasil para integração com o trem.",
      "Corridor": "TransBrasil",
      "Level": "high",
      "Place": "SuperVia Estação Parada de Lucas",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-43.3007438, -22.8166618, 0.0]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "Name": "Falta de integração entre BRT TransBrasil e trens",
      "Description": "O BRT TransBrasil tem potencial para formar uma grande conexão transversal entre diversos ramais de trem e metrô. Porém, não está prevista integração física entre o BRT TransBrasil e as estações de trem de Parada de Lucas e Barros Filho, que se encontram a apenas 300m e 500m do corredor, respectivamente.",
      "Recommendation": "Analisar a viabilidade de adequação do BRT TransBrasil para integração com o trem.",
      "Corridor": "TransBrasil",
      "Level": "high",
      "Place": "SuperVia Estação Barros Filho",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-43.3665604, -22.8332113, 0.0]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "Name": "Falta de integração entre BRT TransBrasil e o metrô",
      "Description": "Não está prevista integração física entre o BRT TransBrasil e a estação de metrô de Coelho Neto, que se encontra a 200m do corredor. Além disso, as passarelas do local tem capacidade inferior ao fluxo de pedestres atual e precisam ser revistas, sob pena de restringir o acesso de passageiros numa futura integração.",
      "Recommendation": "Analisar a viabilidade de adequação do BRT TransBrasil para integração com o metrô.",
      "Corridor": "TransBrasil",
      "Level": "high",
      "Place": "MetrôRio Estação Coelho Neto",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-43.3429193, -22.8318735, 0.0]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "Name": "Sistema de informações adequado",
      "Description": "A comunicação de informações de forma estática ou em tempo real ainda não é satisfatória nos corredores TransOeste e TransCarioca. Com mais 2 corredores, o sistema ficará ainda mais complexo.",
      "Recommendation": "Sistema de informações simples, unificado e preciso, que dê facilidades para o usuário se localizar na cidade e escolher dentre os serviços disponíveis para atingir seu destino.",
      "Corridor": "TransBrasil",
      "Level": "high",
      "Place": "Centro de Controle Operacional (Terminal Alvorada)",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-43.36409, -23.00076, 0.0]
    }
  }
];

// TransBrasil Integração Modal Atenção
TB_IM_AT = [
  {
    "type": "Feature",
    "properties": {
      "Name": "Falta de integração entre BRT TransBrasil e as barcas",
      "Description": "Não está prevista integração física entre o BRT TransBrasil e a estação Praça XV das Barcas, o que ampliaria o acesso dos passageiros às áreas atendidas tanto pelo corredor quanto pelas linhas aquaviárias.",
      "Recommendation": "Analisar a viabilidade de adequação do BRT TransBrasil para integração com as barcas.",
      "Corridor": "TransBrasil",
      "Level": "mid",
      "Place": "CCR Barcas Estação Praça XV",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-43.17213, -22.90252, 0.0]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "Name": "Integração com linhas alimentadoras",
      "Description": "Está prevista integração entre o BRT TransBrasil e BRT TransOlímpica com o sistema de linhas alimentadoras. Para ser efetiva, essa integração precisa atender com qualidade locais com intensa concentração de linhas e grande número de veículos.",
      "Recommendation": "Atenção à integração física com proteção contra intempéries; à integração operacional com a chegadas e partidas sincronizadas; e informação do quadro de horário das linhas alimentadoras.",
      "Corridor": "TransBrasil",
      "Level": "mid",
      "Place": "Estação Guadalupe",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-43.377173748999944, -22.845052519999967, 0.0]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "Name": "Integração com linhas alimentadoras",
      "Description": "Está prevista integração entre o BRT TransBrasil e BRT TransOlímpica com o sistema de linhas alimentadoras. Para ser efetiva, essa integração precisa atender com qualidade locais com intensa concentração de linhas e grande número de veículos.",
      "Recommendation": "Atenção à integração física com proteção contra intempéries; à integração operacional com a chegadas e partidas sincronizadas; e informação do quadro de horário das linhas alimentadoras.",
      "Corridor": "TransBrasil",
      "Level": "mid",
      "Place": "Estação Barros Filho",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-43.368678620999958, -22.839779926999938, 0.0]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "Name": "Integração com linhas alimentadoras",
      "Description": "Está prevista integração entre o BRT TransBrasil e BRT TransOlímpica com o sistema de linhas alimentadoras. Para ser efetiva, essa integração precisa atender com qualidade locais com intensa concentração de linhas e grande número de veículos.",
      "Recommendation": "Atenção à integração física com proteção contra intempéries; à integração operacional com a chegadas e partidas sincronizadas; e informação do quadro de horário das linhas alimentadoras.",
      "Corridor": "TransBrasil",
      "Level": "mid",
      "Place": "Estação Coelho Neto",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-43.350847683999966, -22.831040709999964, 0.0]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "Name": "Integração com linhas alimentadoras",
      "Description": "Está prevista integração entre o BRT TransBrasil e BRT TransOlímpica com o sistema de linhas alimentadoras. Para ser efetiva, essa integração precisa atender com qualidade locais com intensa concentração de linhas e grande número de veículos.",
      "Recommendation": "Atenção à integração física com proteção contra intempéries; à integração operacional com a chegadas e partidas sincronizadas; e informação do quadro de horário das linhas alimentadoras.",
      "Corridor": "TransBrasil",
      "Level": "mid",
      "Place": "Estação Fiocruz",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-43.24302232499997, -22.87533465599995, 0.0]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "Name": "Integração com linhas alimentadoras",
      "Description": "Está prevista integração entre o BRT TransBrasil e BRT TransOlímpica com o sistema de linhas alimentadoras. Para ser efetiva, essa integração precisa atender com qualidade locais com intensa concentração de linhas e grande número de veículos.",
      "Recommendation": "Atenção à integração física com proteção contra intempéries; à integração operacional com a chegadas e partidas sincronizadas; e informação do quadro de horário das linhas alimentadoras.",
      "Corridor": "TransBrasil",
      "Level": "mid",
      "Place": "Terminal Gasômetro",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-43.210871239999946, -22.898748474999934, 0.0]
    }
  }
];

// TransBrasil Integração Modal Sugestão
TB_IM_SU = [
  {
    "type": "Feature",
    "properties": {
      "Name": "Integração entre BRT e VLT para conectar os aeroportos",
      "Description": "Integração efetiva entre o VLT e o BRT TransBrasil para criar uma conexão entre os aeroportos Santos Dumont e Antônio Carlos Jobim (Galeão).",
      "Recommendation": "Integração tarifária por meio do Bilhete Único; integração operacional com chegadas/partidas sincronizadas e sistema de informação em tempo real; integração física com proteção contra intempéries e acessibilidade universal; implantação de sistema de monitoramento da qualidade.",
      "Corridor": "TransBrasil",
      "Level": "low",
      "Place": "Aeroporto Santos Dumont",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-43.1666, -22.9124, 0.0]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "Name": "Falta de integração entre corredores de BRT",
      "Description": "Está prevista integração física por meio de terminais e viadutos nos dois BRTs. Porém, nestes pontos, os veículos podem adotar apenas uma direção, levando os passageiros a percorrer distâncias desnecessárias caso optem por seguir em outra direção. Provavelmente haverá um incremento na demanda dos corredores já operantes, como observado no BRT TransOeste após o início do TransCarioca.",
      "Recommendation": "Analisar a viabilidade de adequação para melhor integração entre corredores.",
      "Corridor": "TransOlímpica",
      "Level": "low",
      "Place": "Ligação Viaduto entre TransBrasil e TransCarioca",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-43.24728, -22.84991, 0.0]
    }
  }
];

// TransBrasil Bicicleta e Pedestre Crítico
TB_BP_CR = [
  {
    "type": "Feature",
    "properties": {
      "Name": "Fluxo de pedestres nas estações de maior demanda",
      "Description": "O ITDP Brasil realizou um estudo sobre passarelas nas área de Bonsucesso e Fiocruz do BRT TransBrasil, no qual foi constatado um subdimensionamento do acesso de pedestres às plataformas.",
      "Recommendation": "É necessário uma passarela em cada extremidade da estação, o que facilita o acesso a diferentes destinos nos bairros próximos e a opções de integração modal (linhas alimentadoras, bicicletas). As passarelas devem evitar retornos em 180º, ter escadas para fornecer rotas diretas e ser protegidas contra intempéries.",
      "Corridor": "TransBrasil",
      "Level": "high",
      "Place": "Estação Fiocruz",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-43.24302232499997, -22.87533465599995, 0.0]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "Name": "Fluxo de pedestres nas estações de maior demanda",
      "Description": "O ITDP Brasil realizou um estudo sobre passarelas nas área de Bonsucesso e Fiocruz do BRT TransBrasil, no qual foi constatado um subdimensionamento do acesso de pedestres às plataformas.",
      "Recommendation": "É necessário uma passarela em cada extremidade da estação, o que facilita o acesso a diferentes destinos nos bairros próximos e a opções de integração modal (linhas alimentadoras, bicicletas). As passarelas devem evitar retornos em 180º, ter escadas para fornecer rotas diretas e ser protegidas contra intempéries.",
      "Corridor": "TransBrasil",
      "Level": "high",
      "Place": "Estação Joana Nascimento",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-43.247626545999935, -22.866630405999956, 0.0]
    }
  }
];

// TransBrasil Bicicleta e Pedestre Atenção
TB_BP_AT = [
  {
    "type": "Feature",
    "properties": {
      "Name": "Acessibilidade por caminhada no BRT TransBrasil",
      "Description": "A segregação física entre o BRT TransBrasil e o meio urbano é grande e pode desestimular o acesso às estações, principalmente com a criação de 8 novos viadutos, embora esteja prevista a reurbanização ao longo do corredor (novas calçadas e iluminação pública).",
      "Recommendation": "Considerando sua extensão, é crítico que haja participação da população local e comprometimento com a qualidade do projeto. Desta forma pode-se aumentar a integração do sistema de BRT ao interior dos bairros por meio dos deslocamentos à pé.",
      "Corridor": "TransBrasil",
      "Level": "mid",
      "Place": "Estação Isidro Rocha",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-43.308405507999964, -22.818187841999929, 0.0]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "Name": "Acessibilidade por caminhada no BRT TransBrasil",
      "Description": "A segregação física entre o BRT TransBrasil e o meio urbano é grande e pode desestimular o acesso às estações, principalmente com a criação de 8 novos viadutos, embora esteja prevista a reurbanização ao longo do corredor (novas calçadas e iluminação pública).",
      "Recommendation": "Considerando sua extensão, é crítico que haja participação da população local e comprometimento com a qualidade do projeto. Desta forma pode-se aumentar a integração do sistema de BRT ao interior dos bairros por meio dos deslocamentos à pé.",
      "Corridor": "TransBrasil",
      "Level": "mid",
      "Place": "Estação Ramos",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-43.251022025999923, -22.842961656999933, 0.0]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "Name": "Acessibilidade por caminhada no BRT TransBrasil",
      "Description": "A segregação física entre o BRT TransBrasil e o meio urbano é grande e pode desestimular o acesso às estações, principalmente com a criação de 8 novos viadutos, embora esteja prevista a reurbanização ao longo do corredor (novas calçadas e iluminação pública).",
      "Recommendation": "Considerando sua extensão, é crítico que haja participação da população local e comprometimento com a qualidade do projeto. Desta forma pode-se aumentar a integração do sistema de BRT ao interior dos bairros por meio dos deslocamentos à pé.",
      "Corridor": "TransBrasil",
      "Level": "mid",
      "Place": "Estação Rubens Vaz",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-43.247635228999968, -22.853100716999961, 0.0]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "Name": "Acessibilidade por bicicletas no BRT TransBrasil",
      "Description": "No BRT TransBrasil há um grande potencial para uso da bicicleta como elemento integrador, pela proximidade dos bairros e pelo grande número de bicicletas estacionadas no entorno das estações.",
      "Recommendation": "Implementação de bicicletários seguros e malha cicloviária que ofereça ligações transversais aos bairros adjacentes. A infraestrutura cicloviária planejada deve considerar a conexão ao sistema de BRT, com o sistema de bicicletas compartilhadas sendo expandido para áreas atendidas pelo corredor.",
      "Corridor": "TransBrasil",
      "Level": "mid",
      "Place": "Maré",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-43.2425729, -22.8592368, 0.0]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "Name": "Acessibilidade por bicicletas no BRT TransBrasil",
      "Description": "No BRT TransBrasil há um grande potencial para uso da bicicleta como elemento integrador, pela proximidade dos bairros e pelo grande número de bicicletas estacionadas no entorno das estações.",
      "Recommendation": "Implementação de bicicletários seguros e malha cicloviária que ofereça ligações transversais aos bairros adjacentes. A infraestrutura cicloviária planejada deve considerar a conexão ao sistema de BRT, com o sistema de bicicletas compartilhadas sendo expandido para áreas atendidas pelo corredor.",
      "Corridor": "TransBrasil",
      "Level": "mid",
      "Place": "Vila do João",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-43.2404515, -22.8728522, 0.0]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "Name": "Acessibilidade por bicicletas no BRT TransBrasil",
      "Description": "No BRT TransBrasil há um grande potencial para uso da bicicleta como elemento integrador, pela proximidade dos bairros e pelo grande número de bicicletas estacionadas no entorno das estações.",
      "Recommendation": "Implementação de bicicletários seguros e malha cicloviária que ofereça ligações transversais aos bairros adjacentes. A infraestrutura cicloviária planejada deve considerar a conexão ao sistema de BRT, com o sistema de bicicletas compartilhadas sendo expandido para áreas atendidas pelo corredor.",
      "Corridor": "TransBrasil",
      "Level": "mid",
      "Place": "Olaria",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-43.2706124, -22.8484866, 0.0]
    }
  }
];

// TransBrasil Bicicleta e Pedestre Sugestão
TB_BP_SU = [
  {
    "type": "Feature",
    "properties": {
      "Name": "Fluxo de pedestres no Terminal Deodoro",
      "Description": "O Terminal de Santa Cruz do BRTs TransOeste não foi dimensionado para comportar o fluxo de passageiros que recebe diariamente. É essencial que no Terminal Deodoro as plataformas, passarelas, escadas, roletas de acesso (e todos os elementos das estações) estejam dimensionados corretamente.",
      "Recommendation": "O planejamento arquitetônico e operacional dos terminais deve ser feito com base em diretrizes internacionais, como por exemplo, as do Guia de Planejamento de BRT.",
      "Corridor": "TransBrasil",
      "Level": "low",
      "Place": "Terminal Deodoro",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-43.384866488999933, -22.855712567999944, 0.0]
    }
  }
];

// TransBrasil TOD Crítico
TB_TD_CR = [
  {
    "type": "Feature",
    "properties": {
      "Name": "Pendularidade do corredor",
      "Description": "Dada a concentração de empregos e moradia em extremidades opostas dos corredores BRT TransBrasil e TransOlímpica, ambos tendem a apresentar grande pendularidade.",
      "Recommendation": "A implementação de medidas de Desenvolvimento Orientado ao Transporte (TOD) nos bairros de Deodoro e Magalhães Bastos pode reduzir a pendularidade desses corredores. Deve-se estudar quais usos podem gerar empregos e potencializar o desenvolvimento, aproveitando a convergência das rotas de BRT, trem e vias expressas já consolidadas.",
      "Corridor": "TransBrasil",
      "Level": "high",
      "Place": "Deodoro",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-43.384863122999946, -22.855722815999965, 0.0]
    }
  }
];

// TransBrasil TOD Sugestão
TB_TD_SU = [
  {
    "type": "Feature",
    "properties": {
      "Name": "Conflito de usos na Av. Brasil",
      "Description": "No BRT TransBrasil, caso haja adensamento nos bairros já consolidados próximos ao Centro, é possível haver conflitos entre novos usos residenciais e os históricos usos logísticos e industriais.",
      "Recommendation": "O adensamento populacional deve ser planejado para incorporar uma mistura de usos compatíveis nos entornos das estações.",
      "Corridor": "TransBrasil",
      "Level": "low",
      "Place": "Estação São Francisco",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-43.224533092999927, -22.886861580999948, 0.0]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "Name": "Conflito de usos na Av. Brasil",
      "Description": "No BRT TransBrasil, caso haja adensamento nos bairros já consolidados próximos ao Centro, é possível haver conflitos entre novos usos residenciais e os históricos usos logísticos e industriais.",
      "Recommendation": "O adensamento populacional deve ser planejado para incorporar uma mistura de usos compatíveis nos entornos das estações.",
      "Corridor": "TransBrasil",
      "Level": "low",
      "Place": "Estação Parque Vitória",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-43.236250954999939, -22.884183683999936, 0.0]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "Name": "Desenvolvimento de centralidades",
      "Description": "Ao longo do BRT TransBrasil há diversos e importantes pólos e equipamentos públicos.",
      "Recommendation": "Estes podem se tornar atrativos para diferentes públicos em horários diversificados, servindo para consolidar novas centralidades, incentivar o adensamento ao longo do corredor e reduzir sua pendularidade.",
      "Corridor": "TransBrasil",
      "Level": "low",
      "Place": "Piscinão de Ramos",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-43.25049, -22.83927, 0.0]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "Name": "Desenvolvimento de centralidades",
      "Description": "Ao longo do BRT TransBrasil há diversos e importantes pólos e equipamentos públicos.",
      "Recommendation": "Estes podem se tornar atrativos para diferentes públicos em horários diversificados, servindo para consolidar novas centralidades, incentivar o adensamento ao longo do corredor e reduzir sua pendularidade.",
      "Corridor": "TransBrasil",
      "Level": "low",
      "Place": "Shopping Jardim Guadalupe",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-43.36891, -22.84110, 0.0]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "Name": "Desenvolvimento de centralidades",
      "Description": "Ao longo do BRT TransBrasil há diversos e importantes pólos e equipamentos públicos.",
      "Recommendation": "Estes podem se tornar atrativos para diferentes públicos em horários diversificados, servindo para consolidar novas centralidades, incentivar o adensamento ao longo do corredor e reduzir sua pendularidade.",
      "Corridor": "TransBrasil",
      "Level": "low",
      "Place": "Shopping Via Brasil",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-43.31978, -22.82309, 0.0]
    }
  }
];