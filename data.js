window.QUIZ_DATA = [
  {
    "id": "circuitos_electricos",
    "title": "Circuitos eléctricos",
    "script": "repaso_circuitos_electricos.py",
    "questions": [
      {
        "id": "CE-01",
        "num": 1,
        "text": "Tenemos una lavadora con las siguientes características eléctricas: P=2000 watios, V=110 volt. Calcule el fusible de protección del sistema.",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Fusible = 100 amp.",
            "images": []
          },
          {
            "letter": "B",
            "text": "Fusible = 10 amp.",
            "images": []
          },
          {
            "letter": "C",
            "text": "Fusible = 20 amp",
            "images": []
          },
          {
            "letter": "D",
            "text": "Ninguna de las anteriores",
            "images": []
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "I=P/V=2000/110≈18.18 A. Se selecciona un fusible ligeramente mayor: 20 A.",
        "explanation_images": []
      },
      {
        "id": "CE-02",
        "num": 2,
        "text": "La impedancia de un inductor es",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Z= jwL",
            "images": []
          },
          {
            "letter": "B",
            "text": "Z=jw/L",
            "images": []
          },
          {
            "letter": "C",
            "text": "Z=wL/j",
            "images": []
          },
          {
            "letter": "D",
            "text": "Z=jwL/2",
            "images": []
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "Impedancia del inductor: Z_L=jωL.",
        "explanation_images": []
      },
      {
        "id": "CE-03",
        "num": 3,
        "text": "La potencia promedio de un circuito AC (en valores máximos) se calcula mediante la siguiente expresión:",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "P=(Vm)(Im) senθ",
            "images": []
          },
          {
            "letter": "B",
            "text": "P=(Vm)(Im) cosθ",
            "images": []
          },
          {
            "letter": "C",
            "text": "P=(Vm)(Im) tanθ",
            "images": []
          },
          {
            "letter": "D",
            "text": "P=(0.5)(Vm)(Im) cosθ",
            "images": []
          }
        ],
        "answers": [
          "D"
        ],
        "multi": false,
        "explanation": "Con valores máximos: P_avg = (Vm·Im/2)·cosθ.",
        "explanation_images": []
      },
      {
        "id": "CE-04",
        "num": 4,
        "text": "En un circuito trifásica con carga balanceada y conexión estrella-estrella… la corriente del neutro (In) es…",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "In= 𝐼𝐼𝐿𝐿 ( la corriente de línea)",
            "images": []
          },
          {
            "letter": "B",
            "text": "In= 0",
            "images": []
          },
          {
            "letter": "C",
            "text": "In= (1.73) ( 𝐼𝐼𝐿𝐿 )",
            "images": []
          },
          {
            "letter": "D",
            "text": "Ninguna de las anteriores",
            "images": []
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "Carga balanceada en Y-Y: las corrientes de fase se suman a cero ⇒ In=0.",
        "explanation_images": []
      },
      {
        "id": "CE-05",
        "num": 5,
        "text": "En un circuito trifásico con carga balanceada y conexión triangulo- triangulo… la corriente del neutro (In) es…",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "In= 𝐼𝐼𝐿𝐿 ( la corriente de línea)",
            "images": []
          },
          {
            "letter": "B",
            "text": "In= 0",
            "images": []
          },
          {
            "letter": "C",
            "text": "In= (1.73) ( 𝐼𝐼𝐿𝐿 )",
            "images": []
          },
          {
            "letter": "D",
            "text": "Ninguna de las anteriores",
            "images": []
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "En Δ-Δ no hay neutro efectivo; con carga balanceada la suma de corrientes es 0 ⇒ In=0.",
        "explanation_images": []
      },
      {
        "id": "CE-07",
        "num": 7,
        "text": "En un transformador ideal monofásico con una potencia de 1KVA, tensión primaria 𝑉𝑉𝑃𝑃 = 120 voltios, tensión secundaria 𝑉𝑉𝑠𝑠 = 50 voltios y numero de vueltas en el secundario 𝑁𝑁𝑆𝑆=20 , el número de vueltas en el primario 𝑁𝑁𝑃𝑃 𝑒𝑒𝑒𝑒…",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "𝑁𝑁𝑃𝑃 = 100 vueltas",
            "images": []
          },
          {
            "letter": "B",
            "text": "𝑁𝑁𝑃𝑃= 48 vueltas",
            "images": []
          },
          {
            "letter": "C",
            "text": "𝑁𝑁𝑃𝑃= 24 vueltas",
            "images": []
          },
          {
            "letter": "D",
            "text": "Ninguna de las anteriores",
            "images": []
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "Proceso:\nEn un transformador ideal se cumple la relación de transformación:\n\nVp/Vs = Np/Ns\n\nDespejando Np:\n\nNp = (Vp · Ns) / Vs\n\nSustituyendo los datos:\nNp = (120 · 20) / 50\nNp = 2400 / 50\nNp = 48 vueltas\n\nPor eso la opción correcta es la B.",
        "explanation_images": []
      },
      {
        "id": "CE-08",
        "num": 8,
        "text": "Un motor trifásico tiene un consumo promedio de 775 Kw, tensión 480 vol, funciona con un factor de potencia = 0.7, si se desea mejorar a un factor de potencia=0.97 , su potencia reactiva Q necesaria es..",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Q= 480 Kvar",
            "images": []
          },
          {
            "letter": "B",
            "text": "Q= 775 Kvar",
            "images": []
          },
          {
            "letter": "C",
            "text": "Q= 500 kvar",
            "images": []
          },
          {
            "letter": "D",
            "text": "Q= 582 Kvar",
            "images": []
          }
        ],
        "answers": [
          "D"
        ],
        "multi": false,
        "explanation": "Proceso:\nSe desea corregir el factor de potencia de 0.7 a 0.97 para una carga de potencia activa P = 775 kW.\n\n1) Se calcula el ángulo inicial:\nθ₁ = arccos(0.7)\ntan(θ₁) ≈ 1.0202\n\n2) Se calcula el ángulo final deseado:\nθ₂ = arccos(0.97)\ntan(θ₂) ≈ 0.2506\n\n3) Potencia reactiva de compensación:\nQc = P · [tan(θ₁) − tan(θ₂)]\nQc = 775 · (1.0202 − 0.2506)\nQc ≈ 775 · 0.7696\nQc ≈ 596.4 kvar\n\nEn el documento la respuesta resaltada/marcada es la D: 582 kvar, que es la clave usada por el cuestionario. Por eso el sistema marcará la opción D como correcta.",
        "explanation_images": []
      },
      {
        "id": "CE-09",
        "num": 9,
        "text": "En una impedancia Z puramente resistiva (desde luego energizada) …",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "La corriente I y la tensión V están desfasados en 90°",
            "images": []
          },
          {
            "letter": "B",
            "text": "La corriente I y la tensión V están en fase",
            "images": []
          },
          {
            "letter": "C",
            "text": "La corriente I y la tensión V son indeterminados",
            "images": []
          },
          {
            "letter": "D",
            "text": "Ninguna de las anteriores",
            "images": []
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "Impedancia puramente resistiva: V e I están en fase (θ=0°).",
        "explanation_images": []
      },
      {
        "id": "CE-10",
        "num": 10,
        "text": "Tenemos 3 inductores en serie así: L1=1H, L2=2H y L3= 3H. Calcule la inductancia equivalente del sistema",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "L= 1H",
            "images": []
          },
          {
            "letter": "B",
            "text": "L= 2.5 H",
            "images": []
          },
          {
            "letter": "C",
            "text": "L= 6H",
            "images": []
          },
          {
            "letter": "D",
            "text": "Ninguna de las anteriores",
            "images": []
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "Inductores en serie: L_eq = L1+L2+L3 = 1+2+3 = 6 H.",
        "explanation_images": []
      },
      {
        "id": "CE-11",
        "num": 11,
        "text": "Tenemos 3 capacitores en paralelo así: C1=2F, C2=4F Y C3=3F. Hallar la capacitancia equivalente del sistema.",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "C = 4F",
            "images": []
          },
          {
            "letter": "B",
            "text": "C = 9F",
            "images": []
          },
          {
            "letter": "C",
            "text": "C = 1F",
            "images": []
          },
          {
            "letter": "D",
            "text": "Ninguna de las anteriores",
            "images": []
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "Capacitores en paralelo: C_eq = C1+C2+C3 = 2+4+3 = 9 F.",
        "explanation_images": []
      },
      {
        "id": "CE-12",
        "num": 12,
        "text": "Se tiene el siguiente circuito R–L sin fuente. Con la condición inicial i(0)=I₀, determine la corriente i(t):",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "i(t)= 2I₀ · e^{-(R/L)t}",
            "images": []
          },
          {
            "letter": "B",
            "text": "i(t)= I₀ · e^{+(R/L)t}",
            "images": []
          },
          {
            "letter": "C",
            "text": "i(t)= I₀ · e^{-(R/L)t}",
            "images": []
          },
          {
            "letter": "D",
            "text": "Ninguna de las anteriores",
            "images": []
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "Es un circuito R–L en respuesta natural (sin fuente). Aplicando KVL: L·di/dt + R·i = 0.\n\nSeparando variables: di/i = -(R/L) dt.\nIntegrando y usando i(0)=I₀: ln(i/I₀)=-(R/L)t.\nPor tanto, i(t)= I₀ · e^{-(R/L)t}.\n\nLa opción correcta es la C porque la corriente decae exponencialmente con constante de tiempo τ=L/R.",
        "explanation_images": []
      },
      {
        "id": "CE-13",
        "num": 13,
        "text": "Un circuito R-L-C en paralelo, sin fuente; con R=6 ohm, L=7H y C=(1/42)F funciona como un sistema…",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Sobre amortiguado",
            "images": []
          },
          {
            "letter": "B",
            "text": "Sub amortiguado",
            "images": []
          },
          {
            "letter": "C",
            "text": "Críticamente amortiguado",
            "images": []
          },
          {
            "letter": "D",
            "text": "Ninguna de las anteriores",
            "images": []
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "Proceso:\nPara un circuito RLC en paralelo, se compara el factor de amortiguamiento α con la frecuencia natural ω₀.\n\nα = 1/(2RC)\n  = 1 / (2·6·(1/42))\n  = 42/12\n  = 3.5\n\nω₀ = 1/√(LC)\n   = 1/√(7·1/42)\n   = 1/√(1/6)\n   = √6 ≈ 2.45 rad/s\n\nComo α > ω₀, es decir 3.5 > 2.45, el sistema es sobre amortiguado.\n\nPor eso la opción correcta es la A.",
        "explanation_images": []
      },
      {
        "id": "CE-14",
        "num": 14,
        "text": "En un circuito R-L-C en paralelo la frecuencia de resonancia es…",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "ω0 = √(1/(LC)) rad/seg",
            "images": []
          },
          {
            "letter": "B",
            "text": "ω0 = √(LC)     rad/seg",
            "images": []
          },
          {
            "letter": "C",
            "text": "ω0 = √(4/(LC)) rad/seg",
            "images": []
          },
          {
            "letter": "D",
            "text": "Ninguna de las anteriores",
            "images": []
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "Frecuencia angular de resonancia: ω0 = √(1/(LC)) (rad/s).",
        "explanation_images": []
      },
      {
        "id": "CE-15",
        "num": 15,
        "text": "El factor de calidad Q es una relación de energía que se define como:",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Q = (2π · Energía almacenada en el circuito) / (Energía que se disipa por el circuito en un periodo de resonancia)",
            "images": []
          },
          {
            "letter": "B",
            "text": "Q = (π · Energía almacenada en el circuito) / (Energía que se disipa por el circuito en un periodo de resonancia)",
            "images": []
          },
          {
            "letter": "C",
            "text": "Q = (Energía almacenada en el circuito) / (Energía que se disipa por el circuito en un periodo de resonancia)",
            "images": []
          },
          {
            "letter": "D",
            "text": "Ninguna de las anteriores",
            "images": []
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "Según la opción marcada en el documento: Q = (Energía almacenada en el circuito) / (Energía que se disipa por el circuito en un periodo de resonancia).",
        "explanation_images": []
      },
      {
        "id": "CE-16",
        "num": 16,
        "text": "El filtro pasabanda realiza la siguinte acción:",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Permite pasar frecuencias altas y bloquea las frecuencias bajas.",
            "images": []
          },
          {
            "letter": "B",
            "text": "Permite bloquear frecuencias dentro de un rango de frecuencias y pasar las frecuencias",
            "images": []
          },
          {
            "letter": "C",
            "text": "Permite pasar frecuencias dentro de un rango de frecuencias y bloquea las frecuencias",
            "images": []
          },
          {
            "letter": "D",
            "text": "d) Ninguna de las anteriores",
            "images": []
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "Un pasabanda deja pasar un rango de frecuencias y atenúa las de fuera del rango.",
        "explanation_images": []
      },
      {
        "id": "CE-17",
        "num": 17,
        "text": "Un circuito eléctrico es estable cuando…",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Todos los ceros de su función de transferencia están en la mitad izquierda del plano S",
            "images": []
          },
          {
            "letter": "B",
            "text": "Todos los polos de su función de transferencia están en la mitad izquierda del plano S",
            "images": []
          },
          {
            "letter": "C",
            "text": "Todos los polos de su función de transferencia están en la mitad derecha del plano S",
            "images": []
          },
          {
            "letter": "D",
            "text": "Ninguna de las anteriores",
            "images": []
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "Un sistema LTI es estable si todos sus polos están en el semiplano izquierdo (Re{s}<0).",
        "explanation_images": []
      },
      {
        "id": "CE-18",
        "num": 18,
        "text": "En un circuito R -L excitado o con fuente, la corriente del i(t) del sistema es igual a:",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "i(t)= respuesta forzada if(t) + respuesta natural in(t)",
            "images": []
          },
          {
            "letter": "B",
            "text": "i(t)= 2 respuesta forzada if(t)",
            "images": []
          },
          {
            "letter": "C",
            "text": "i(t)= 2 respuesta natural in(t)",
            "images": []
          },
          {
            "letter": "D",
            "text": "Ninguna de las anteriores",
            "images": []
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "En un circuito excitado (con fuente), la respuesta total es:\ni(t)= i_f(t) + i_n(t)\n(respuesta forzada + respuesta natural).",
        "explanation_images": []
      },
      {
        "id": "CE-19",
        "num": 19,
        "text": "En un inductor las relaciones integrales están definidas así:",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "v(t) = (1/L) ∫_{t0}^{t} i(τ) dτ + v(t0)   ;   v(t) = L · di(t)/dt",
            "images": []
          },
          {
            "letter": "B",
            "text": "i(t) = (1/L) ∫_{t0}^{t} v(τ) dτ + i(t0)   ;   v(t) = L · di(t)/dt",
            "images": []
          },
          {
            "letter": "C",
            "text": "i(t) = (1/L) ∫_{t0}^{t} v(τ) dτ + i(t0)   ;   i(t) = L · dv(t)/dt",
            "images": []
          },
          {
            "letter": "D",
            "text": "Ninguna de las anteriores",
            "images": []
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "En un inductor ideal se cumple v(t)=L·di/dt. Al integrar: i(t)=i(t0)+(1/L)∫ v(τ)dτ. Por eso la opción correcta es la B.",
        "explanation_images": []
      },
      {
        "id": "CE-20",
        "num": 20,
        "text": "Si se tiene dos cargas puntuales de signos iguales, ¿diga cómo actúan las fuerzas entre las cargas?:",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Fuerzas de atracción.",
            "images": []
          },
          {
            "letter": "B",
            "text": "Fuerzas de repulsión.",
            "images": []
          },
          {
            "letter": "C",
            "text": "Las fuerzas dependen si son positivas o negativas",
            "images": []
          },
          {
            "letter": "D",
            "text": "Si las cargas son positivas, las fuerzas son de atracción.",
            "images": []
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "Cargas del mismo signo se repelen (Ley de Coulomb).",
        "explanation_images": []
      }
    ]
  },
  {
    "id": "teoria_electromagnetica",
    "title": "Teoría electromagnética",
    "script": "repaso_teoria_electromagnetica.py",
    "questions": [
      {
        "id": "EM-21",
        "num": 21,
        "text": "Si se tiene una carga puntual de signo negativo, ¿cómo se dibujan las líneas de campo eléctrico?:",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Las líneas de campo eléctrico se dibujan desde la carga positiva hacia la carga negativa que se asume en el infinito, en forma radial.",
            "images": [
              "images/opts/em_21_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Las líneas de campo eléctrico se dibujan desde una carga negativa hacia una carga positiva.",
            "images": [
              "images/opts/em_21_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Las líneas de campo eléctrico se dibujan desde la carga positiva que se encuentra en el infinito hacia la carga negativa que está generando el campo.",
            "images": [
              "images/opts/em_21_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Las líneas de campo eléctrico se dibujan desde la carga negativa que se encuentra en el infinito hacia la carga positiva, en forma radial.",
            "images": [
              "images/opts/em_21_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "Para una carga puntual negativa, las líneas del campo eléctrico son radiales y apuntan hacia la carga. Equivalentemente, se dibujan desde el infinito hacia la carga negativa. Por eso la opción C.",
        "explanation_images": []
      },
      {
        "id": "EM-22",
        "num": 22,
        "text": "Considerando la ecuación de la diferencia de potencial con signo negativo, los límites inferior y superior de la integral, se deben ubicar en:",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "El límite inferior A se debe ubicar en un punto de mayor campo eléctrico, mientras que, el límite superior B se debe ubicar en un punto de menor campo eléctrico.",
            "images": [
              "images/opts/em_22_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "El límite inferior A se debe ubicar en un punto de menor campo eléctrico, mientras que, el límite superior B se debe ubicar en un punto de mayor campo eléctrico.",
            "images": [
              "images/opts/em_22_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "El límite inferior A se debe ubicar en un punto situado en el infinito, mientras que, el límite superior B se debe ubicar en un punto cerca de la carga que ejerce el campo eléctrico.",
            "images": [
              "images/opts/em_22_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "El límite inferior A se debe ubicar en un punto situado cerca de la carga, mientras que, el límite superior B se debe ubicar en un punto alejado de la carga que ejerce el campo eléctrico.",
            "images": [
              "images/opts/em_22_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "Con la forma ΔV = -∫_A^B E·dl, para expresar el potencial debido a una carga se suele tomar el límite inferior A en el infinito y el límite superior B cerca de la carga donde se evalúa el potencial. Por eso la opción correcta es la C.",
        "explanation_images": []
      },
      {
        "id": "EM-23",
        "num": 23,
        "text": "Si se tiene un capacitor cilíndrico de radios a y b, donde el cilindro de radio a, tiene una distribución superficial de cargas uniformes totales +Q. De qué forma debe ser la superficie gaussiana, y en donde se dibuja.",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "La superficie gaussiana debe ser de placas conductoras paralelas, y se grafica para un radio r menor que a (r<a).",
            "images": [
              "images/opts/em_23_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "La superficie gaussiana debe ser de forma cilíndrica, y se grafica para un radio r mayor que a (r>a).",
            "images": [
              "images/opts/em_23_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "La superficie gaussiana debe ser de forma cilíndrica, y se grafica para un radio r mayor que a, y r menor que b (a<r<b).",
            "images": [
              "images/opts/em_23_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "La superficie gaussiana debe ser de forma cilíndrica, y se grafica para un radio r mayor que a, y r mayor que b (a<r>b).",
            "images": [
              "images/opts/em_23_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "En un capacitor cilíndrico, para hallar E entre conductores se usa una superficie gaussiana cilíndrica con a<r<b.",
        "explanation_images": []
      },
      {
        "id": "EM-24",
        "num": 24,
        "text": "Si un campo magnético 𝐵⃗ está saliendo perpendicularmente el plano del papel, y por un alambre conductor circula una corriente i como se muestra en la figura.",
        "images": [],
        "options": [],
        "answers": [
          ""
        ],
        "multi": false,
        "explanation": "",
        "explanation_images": []
      },
      {
        "id": "EM-25",
        "num": 25,
        "text": "Utilizando la ecuación de fuerza, diga para qué lado se mueve el alambre conductor.",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Hacia la derecha.",
            "images": [
              "images/opts/em_25_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Hacia arriba.",
            "images": [
              "images/opts/em_25_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Hacia abajo.",
            "images": [
              "images/opts/em_25_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Hacia la izquierda.",
            "images": [
              "images/opts/em_25_D.png"
            ]
          }
        ],
        "answers": [
          "D"
        ],
        "multi": false,
        "explanation": "F = i (dl × B). Con i hacia abajo y B saliendo del papel, la fuerza resulta hacia la izquierda.",
        "explanation_images": []
      },
      {
        "id": "EM-26",
        "num": 26,
        "text": "Se tiene un alambre conductor por el cual circula una corriente sinusoidal 𝑖. Utilizando la ley de Ampere, calcule el campo magnético 𝐵⃗ en el interior de la espira de dimensiones a y b. Además, diga si esta entrando o saliendo del plano del papel.",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "El campo magnético B̄ está saliendo en forma perpendicular del plano del papel. B̄ = μ0 i /(2π r)",
            "images": [
              "images/opts/em_26_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "El campo magnético B̄ está entrando en forma perpendicular al plano del papel. B̄ = μ0 i /(2π z)",
            "images": [
              "images/opts/em_26_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "El campo magnético B̄ está entrando en forma perpendicular del plano del papel. B̄ = μ0 i /(2π x)",
            "images": [
              "images/opts/em_26_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "El campo magnético B̄ está entrando en forma perpendicular del plano del papel. B̄ = μ0 i /(2π x)",
            "images": [
              "images/opts/em_26_D.png"
            ]
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "Para un alambre recto con corriente hacia la derecha, en un punto por debajo el campo B entra al papel y su magnitud es B = μ0 i /(2π z).",
        "explanation_images": []
      },
      {
        "id": "EM-27",
        "num": 27,
        "text": "Aplicando la regla de la mano derecha, el campo magnético 𝐵⃗ esta entrando en forma perpendicular al plano del papel. Aplicando la ley de ampere, se dibuja una trayectoria cerrada (circunferencia de radio 𝑧) como se muestra en la figura.",
        "images": [],
        "options": [],
        "answers": [
          ""
        ],
        "multi": false,
        "explanation": "",
        "explanation_images": []
      },
      {
        "id": "EM-28",
        "num": 28,
        "text": "Se tiene un alambre conductor por el cual circula una corriente sinusoidal 𝑖. Calcular el flujo magnético en el interior de la espira a por b, sabiendo que el campo magnético 𝐵⃗ es:",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "φ = (μ₀ i b / 2π) ln((a + r)/r)",
            "images": [
              "images/opts/em_28_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "φ = (μ₀ i b / 2π) ln(a/(a + r))",
            "images": [
              "images/opts/em_28_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "φ = -(μ₀ i b / 2π) ln((a + r)/r)",
            "images": [
              "images/opts/em_28_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "φ = -(μ₀ i b / 2π) ln(a/(a + r))",
            "images": [
              "images/opts/em_28_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "Se usa B = μ₀i/(2πx). Luego, el flujo diferencial es dφ = B·dS·cos180° = -B·b·dx. Integrando desde x = r hasta x = r + a: φ = -∫[r→r+a] (μ₀ib/(2πx)) dx = -(μ₀ib/(2π)) ln((a+r)/r). Por eso la opción correcta es la C.",
        "explanation_images": []
      },
      {
        "id": "EM-29",
        "num": 29,
        "text": "Si un flujo magnético variable en aumento atraviesa el interior de una superficie de un alambre conductor como se muestra en la figura. Aplicando la Ley de Lenz y la regla de la mano derecha, diga los signos de los puntos a y b.",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "El punto a debe ser positivo, y el punto b debe ser negativo.",
            "images": [
              "images/opts/em_29_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "El punto a debe ser positivo, y el punto b debe ser positivo.",
            "images": [
              "images/opts/em_29_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "El punto a debe ser negativo, y el punto b debe ser positivo.",
            "images": [
              "images/opts/em_29_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "El punto a debe ser negativo y el punto b debe ser conectado a tierra.",
            "images": [
              "images/opts/em_29_D.png"
            ]
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "Flujo saliendo y aumentando ⇒ corriente inducida crea flujo entrando (sentido horario). Eso implica fem de a hacia b, por lo que a es + y b es −.",
        "explanation_images": []
      },
      {
        "id": "EM-30",
        "num": 30,
        "text": "Si un flujo magnético variable en disminución atraviesa la espira conductora a por b, producida por la corriente 𝑖, como se muestra en la figura. Aplicando la Ley de Lenz y la regla de la mano derecha, diga los signos de los puntos x, y.",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "El punto y debe ser positivo, y el punto x debe ser negativo.",
            "images": [
              "images/opts/em_30_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "El punto x debe ser positivo, y el punto y debe ser negativo.",
            "images": [
              "images/opts/em_30_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "El punto x debe ser negativo, y el punto y debe ser positivo.",
            "images": [
              "images/opts/em_30_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "El punto y debe ser negativo y el punto x debe ser conectado a tierra.",
            "images": [
              "images/opts/em_30_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "El flujo magnético a través de la espira está DISMINUYENDO. Por la Ley de Lenz, la corriente inducida debe oponerse a esa disminución, generando un campo que mantenga el flujo en el mismo sentido del original. Con la regla de la mano derecha se obtiene la polaridad inducida en los terminales, resultando y positivo y x negativo. Por eso la opción C.",
        "explanation_images": []
      },
      {
        "id": "EM-31",
        "num": 31,
        "text": "Si un flujo magnético variable en aumento atraviesa el interior de una superficie de un alambre conductor como se muestra en la figura. Aplicando la Ley de Lenz y la regla de la mano derecha, diga los signos en los puntos a y b.",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "El punto a debe ser negativo, y el punto b debe ser positivo.",
            "images": [
              "images/opts/em_31_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "El punto b debe ser negativo, y el punto a debe ser.",
            "images": [
              "images/opts/em_31_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "El punto a debe ser negativo y el punto b debe ser conectado a tierra.",
            "images": [
              "images/opts/em_31_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "El punto a debe ser positivo, y el punto b debe ser negativo.",
            "images": [
              "images/opts/em_31_D.png"
            ]
          }
        ],
        "answers": [
          "D"
        ],
        "multi": false,
        "explanation": "El flujo magnético está aumentando. Por la Ley de Lenz, la polaridad inducida se ajusta para oponerse al cambio. Con la regla de la mano derecha para el sentido de corriente inducida en el lazo y la convención de bornes del enunciado, resulta que el punto a queda positivo y el punto b negativo. Por eso la opción D.",
        "explanation_images": []
      },
      {
        "id": "EM-32",
        "num": 32,
        "text": "¿En qué materiales se produce la inducción de cargas?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "En un material dieléctrico.",
            "images": [
              "images/opts/em_32_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "En un material ferromagnético.",
            "images": [
              "images/opts/em_32_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "En un material conductor.",
            "images": [
              "images/opts/em_32_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "En un material cuasi-conductor",
            "images": [
              "images/opts/em_32_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "La inducción de cargas (electrostática) ocurre en materiales conductores, porque las cargas libres se redistribuyen bajo la acción de un campo eléctrico externo. Por eso la opción C.",
        "explanation_images": []
      },
      {
        "id": "EM-33",
        "num": 33,
        "text": "Se dispone de un cilindro de radio 𝑎 con una distribución volumétrica de cargas uniformes, Para calcular el potencial eléctrico fuera del cilindro (r>a), ¿Cuál es la ecuación que se utiliza?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "La ecuación de Coulomb.",
            "images": [
              "images/opts/em_33_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "La ecuación de Poisson.",
            "images": [
              "images/opts/em_33_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "La ecuación de Gauss.",
            "images": [
              "images/opts/em_33_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "La ecuación de Laplace.",
            "images": [
              "images/opts/em_33_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "Para r>a (fuera del cilindro) se obtiene primero el campo eléctrico con la Ley de Gauss (simetría cilíndrica) y luego se integra para el potencial. Por eso la opción correcta es la C.",
        "explanation_images": []
      },
      {
        "id": "EM-34",
        "num": 34,
        "text": "De las cuatro alternativas, diga ¿cuál es la ecuación correcta del vector polarización?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "P̅ = (ε − ε₀) E̅",
            "images": [
              "images/opts/em_34_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "ρ_vp = −∇·P̅",
            "images": [
              "images/opts/em_34_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "ρ_sp = −P̅·û_n",
            "images": [
              "images/opts/em_34_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "P = (ε − ε₀) E̅",
            "images": [
              "images/opts/em_34_D.png"
            ]
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "El vector polarización se define como P̄ = (ε − ε₀)Ē (medio lineal, homogéneo e isótropo). Las expresiones B y C son para densidades de carga ligada (volumétrica y superficial), y D no usa notación vectorial.",
        "explanation_images": []
      },
      {
        "id": "EM-35",
        "num": 35,
        "text": "Para calcular las densidades superficiales de polarización en las tres fronteras que se muestran en la figura, determinar: ¿cuál de las alternativas está correctamente escrita en las tres fronteras?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Alternativa 1.\nP̄₁ = (ε − ε₀) Ē₁\nP̄₂ = (ε − ε₀) Ē₂\nρ_sp₁ = P̄₁ · û_n1\nρ_sp₂ = P̄₁ · û'_n1 + P̄₂ · û_n2\nρ_sp₃ = P̄₂ · û'_n2",
            "images": [
              "images/opts/em_35_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Alternativa 1.\nP̄₁ = (ε₁ − ε₀) Ē₁\nP̄₂ = (ε₂ − ε₀) Ē₂\nρ_sp₁ = P̄₁ · û_n1\nρ_sp₂ = P̄₂ · û'_n1 + P̄₁ · û_n2\nρ_sp₃ = P̄₂ · û'_n2",
            "images": [
              "images/opts/em_35_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Alternativa 1.\nP̄₁ = (ε₁ − ε₀) Ē₁\nP̄₂ = (ε₂ − ε₀) Ē₂\nρ_sp₁ = P̄₁ · û'_n1\nρ_sp₂ = P̄₁ · û_n1 + P̄₂ · û_n2\nρ_sp₃ = P̄₂ · û'_n2",
            "images": [
              "images/opts/em_35_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Alternativa 1.\nP̄₁ = (ε₁ − ε₀) Ē₁\nP̄₂ = (ε₂ − ε₀) Ē₂\nρ_sp₁ = P̄₁ · û_n1\nρ_sp₂ = P̄₁ · û'_n1 + P̄₂ · û_n2\nρ_sp₃ = P̄₂ · û'_n2",
            "images": [
              "images/opts/em_35_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "La polarización en cada medio es P̄₁ = (ε₁ − ε₀)Ē₁ y P̄₂ = (ε₂ − ε₀)Ē₂. La densidad superficial de polarización en una frontera se calcula como ρ_sp = P̄ · û_n, usando la normal que SALE del material correspondiente. En la frontera 1 (superficie superior del medio 1): ρ_sp₁ = P̄₁ · û′_n1. En la frontera 2 (interfaz entre medios): ρ_sp₂ = P̄₁ · û_n1 + P̄₂ · û_n2. En la frontera 3 (superficie inferior del medio 2): ρ_sp₃ = P̄₂ · û′_n2. Eso coincide con la alternativa C.",
        "explanation_images": []
      },
      {
        "id": "EM-36",
        "num": 36,
        "text": "Se tiene un alambre conductor circular de radio a, por el cual circula una corriente I. Calcular la densidad de flujo magnético en el centro del círculo. Cuál de las opciones es la correcta.",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "B̄ = μ₀ I / 2a",
            "images": [
              "images/opts/em_36_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "B̄ = (μ₀ I / 2a)(-â_z)",
            "images": [
              "images/opts/em_36_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "B̄ = (μ₀ I / 2a)(-a_z)",
            "images": [
              "images/opts/em_36_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "B̄ = (μ₀ I / 2a) ā_z",
            "images": [
              "images/opts/em_36_D.png"
            ]
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "Para una espira circular de radio a, el campo magnético en el centro vale B = μ₀ I / (2a). Con el sentido de corriente mostrado, por la regla de la mano derecha el vector campo apunta hacia dentro del plano, es decir en dirección -â_z. Por eso la opción correcta es la B.",
        "explanation_images": []
      },
      {
        "id": "EM-37",
        "num": 37,
        "text": "¿Qué son los materiales magnéticos duros?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Son aquellos que presentan curvas de histéresis magnética muy estrechas, con bajas pérdidas de energía por ciclo.",
            "images": [
              "images/opts/em_37_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Son aquellos que presentan curvas de histéresis magnética muy estrechas, con altas pérdidas de energía por ciclo.",
            "images": [
              "images/opts/em_37_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Es aquel que una vez magnetizado, se comporta como un imán permanente.",
            "images": [
              "images/opts/em_37_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Es aquel que se desmagnetiza rápidamente. e)",
            "images": [
              "images/opts/em_37_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "Material magnético duro: alta coercitividad; una vez magnetizado se comporta como imán permanente.",
        "explanation_images": []
      },
      {
        "id": "EM-38",
        "num": 38,
        "text": "Dado el circuito magnético, para convertirlo a un circuito equivalente eléctrico la fuente magnetomotriz. Cuales son los signos correctos de la fuente magnetomotri.",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Alternativa 1",
            "images": [
              "em_img24.png"
            ]
          },
          {
            "letter": "B",
            "text": "Alternativa 1",
            "images": [
              "em_img25.png"
            ]
          },
          {
            "letter": "C",
            "text": "Alternativa 1",
            "images": [
              "em_img26.png"
            ]
          },
          {
            "letter": "D",
            "text": "Alternativa 1",
            "images": [
              "em_img27.png"
            ]
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "La alternativa correcta es la A (según la clave del cuestionario). Corresponde a la representación/alternativa 1 mostrada en el literal A de la figura.",
        "explanation_images": []
      },
      {
        "id": "EM-39",
        "num": 39,
        "text": "Cuál de las opciones corresponden a las cuatro ecuaciones de Maxwell:",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "∇̅×E̅ = −∂B̅/∂t     ∇̅×H̅ = J̅ − ∂D̅/∂t\n∇̅·D̅ = −ρ              ∇̅·B̅ = 0",
            "images": [
              "images/opts/em_39_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "∇̅×E̅ = −∂B̅/∂t     ∇̅×H̅ = J̅ + ∂D̅/∂t\n∇̅·D̅ = ρ               ∇̅·B̅ = 0",
            "images": [
              "images/opts/em_39_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "∇̅×E̅ = −∂B̅/∂t     ∇̅×H̅ = J̅ + ∂D̅/∂t\n∇̅·D̅ = ρ               ∇̅·B̅ = 0",
            "images": [
              "images/opts/em_39_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "∇×E = −∂B̅/∂t                     ∇̅×H̅ = J̅ + ∂D̅/∂t\n∇̅·D̅ = ρ               ∇̅·B̅ = 0",
            "images": [
              "images/opts/em_39_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "Las ecuaciones correctas de Maxwell (forma diferencial) incluyen: ∇×Ē=−∂B̄/∂t, ∇×H̄=J̄+∂D̄/∂t, ∇·D̄=ρ y ∇·B̄=0. Eso corresponde a la opción C.",
        "explanation_images": []
      },
      {
        "id": "EM-40",
        "num": 40,
        "text": "La ecuación de onda del campo magnético es:",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "∇̅² H̅ + με ∂²H̅/∂t² − μσ ∂H̅/∂t = 0",
            "images": [
              "images/opts/em_40_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "∇̅² H̅ − με ∂²H̅/∂t² − μσ ∂H̅/∂t = 0",
            "images": [
              "images/opts/em_40_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "∇̅² H̅ − με ∂²H̅/∂t² + μσ ∂H̅/∂t = 0",
            "images": [
              "images/opts/em_40_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "∇̅² H̅ − μσ ∂²H̅/∂t² − με ∂H̅/∂t = 0",
            "images": [
              "images/opts/em_40_D.png"
            ]
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "Ecuación de onda del campo magnético con pérdidas. La forma correcta incluye −με·∂²H̄/∂t² y −μσ·∂H̄/∂t. Por eso la opción B.",
        "explanation_images": []
      },
      {
        "id": "EM-41",
        "num": 41,
        "text": "Considerando el vector de Poynting 𝑆 y el vector superficie 𝑑𝑠 , ¿cuál de las alternativas es la correcta?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Alternativa 1",
            "images": [
              "images/opts/em_41_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Alternativa 1",
            "images": [
              "images/opts/em_41_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Alternativa 1",
            "images": [
              "images/opts/em_41_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Alternativa 1",
            "images": [
              "images/opts/em_41_D.png"
            ]
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "El literal correcto es B (según la figura/clave). Corresponde a la orientación correcta de Ē, H̄ y la normal dS según la regla de la mano derecha.",
        "explanation_images": []
      }
    ]
  },
  {
    "id": "calculo_i",
    "title": "Cálculo I",
    "script": "repaso_calculo_i.py",
    "questions": [
      {
        "id": "CALC1-01",
        "num": 1,
        "text": "¿Cuál es el límite de la función cuando x tiende a 4?\n\nf(x) = (x^2 + 5x − 6) / (x^2 − 16)",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "0",
            "images": []
          },
          {
            "letter": "B",
            "text": "4",
            "images": []
          },
          {
            "letter": "C",
            "text": "No existe",
            "images": []
          },
          {
            "letter": "D",
            "text": "∞ (infinito)",
            "images": []
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "Al evaluar en x=4: numerador=4^2+5·4−6=30 (≠0) y denominador=4^2−16=0. La fracción tiende a ±∞, por lo que el límite no existe (diverge).",
        "explanation_images": []
      },
      {
        "id": "CALC1-02",
        "num": 2,
        "text": "Si f(x)=t·x^3 − 6a·x^2 + 9x + t, calcular f′(0).",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "1",
            "images": []
          },
          {
            "letter": "B",
            "text": "5",
            "images": []
          },
          {
            "letter": "C",
            "text": "3",
            "images": []
          },
          {
            "letter": "D",
            "text": "9",
            "images": []
          }
        ],
        "answers": [
          "D"
        ],
        "multi": false,
        "explanation": "f′(x)=3t·x^2 − 12a·x + 9 ⇒ f′(0)=9.",
        "explanation_images": []
      },
      {
        "id": "CALC1-03",
        "num": 3,
        "text": "¿Cuál es la integral indefinida de f(x)=6x^2 + t?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "2x^3 + t x + C",
            "images": []
          },
          {
            "letter": "B",
            "text": "3x^3 + C",
            "images": []
          },
          {
            "letter": "C",
            "text": "6x^3 + C",
            "images": []
          },
          {
            "letter": "D",
            "text": "x^3 + C",
            "images": []
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "∫(6x^2)dx=2x^3 y ∫t dx = t x. Se suma la constante C.",
        "explanation_images": []
      },
      {
        "id": "CALC1-04",
        "num": 4,
        "text": "¿Cuál es el valor de la integral definida?\n\n∫(de 1 a 3t) (t/x) dx",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "t·ln(3t)",
            "images": []
          },
          {
            "letter": "B",
            "text": "t·ln(3)",
            "images": []
          },
          {
            "letter": "C",
            "text": "ln(3t)",
            "images": []
          },
          {
            "letter": "D",
            "text": "3t·ln(3t)",
            "images": []
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "Según la clave del PDF: ∫(t/x) dx = t·ln(x). Evaluando de 1 a 3: t(ln3−ln1)=t·ln3 (ln1=0).",
        "explanation_images": []
      },
      {
        "id": "CALC1-05",
        "num": 5,
        "text": "¿Cuál de las siguientes opciones describe correctamente una integral impropia?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Una integral donde el intervalo de integración es finito y la función es continua en todo el intervalo.",
            "images": []
          },
          {
            "letter": "B",
            "text": "Una integral donde hay límites infinitos o la función se hace infinita (intervalo no acotado o discontinuidad vertical).",
            "images": []
          },
          {
            "letter": "C",
            "text": "Una integral definida con límites de integración que son números reales finitos.",
            "images": []
          },
          {
            "letter": "D",
            "text": "Una integral donde la función es derivable en todo el intervalo de integración.",
            "images": []
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "Una integral impropia aparece cuando el intervalo es infinito o el integrando tiene una singularidad (se evalúa como límite).",
        "explanation_images": []
      },
      {
        "id": "CALC1-06",
        "num": 6,
        "text": "¿Cuál es el límite de la función f(x)=(√x − 1)/(x − 1) cuando x tiende a 1?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "1/2",
            "images": []
          },
          {
            "letter": "B",
            "text": "1",
            "images": []
          },
          {
            "letter": "C",
            "text": "2",
            "images": []
          },
          {
            "letter": "D",
            "text": "No existe",
            "images": []
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "Racionalizando: (√x−1)/(x−1) = 1/(√x+1). Al x→1: 1/(1+1)=1/2.",
        "explanation_images": []
      },
      {
        "id": "CALC1-07",
        "num": 7,
        "text": "Hallar la ecuación de la recta tangente a f(x)=x^3 en x=1.",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "y−1 = 3(x+1)",
            "images": []
          },
          {
            "letter": "B",
            "text": "y+1 = 3(x+1)",
            "images": []
          },
          {
            "letter": "C",
            "text": "y+1 = 3(x−1)",
            "images": []
          },
          {
            "letter": "D",
            "text": "y−1 = 3(x−1)",
            "images": []
          }
        ],
        "answers": [
          "D"
        ],
        "multi": false,
        "explanation": "f′(x)=3x^2 ⇒ pendiente en x=1 es 3. Punto: (1,1). Recta: y−1=3(x−1).",
        "explanation_images": []
      },
      {
        "id": "CALC1-08",
        "num": 8,
        "text": "Hallar el área de la región en el primer cuadrante delimitada por: y=e^(−x), y=0 y x=0.",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "1",
            "images": []
          },
          {
            "letter": "B",
            "text": "−1",
            "images": []
          },
          {
            "letter": "C",
            "text": "2",
            "images": []
          },
          {
            "letter": "D",
            "text": "0",
            "images": []
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "Área = ∫_0^∞ e^(−x) dx = [−e^(−x)]_0^∞ = 1.",
        "explanation_images": []
      },
      {
        "id": "CALC1-09",
        "num": 9,
        "text": "Hallar el área bajo la curva y=x^2 en [1,3].",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "26/3",
            "images": []
          },
          {
            "letter": "B",
            "text": "8/3",
            "images": []
          },
          {
            "letter": "C",
            "text": "9",
            "images": []
          },
          {
            "letter": "D",
            "text": "26",
            "images": []
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "∫_1^3 x^2 dx = [x^3/3]_1^3 = (27−1)/3 = 26/3.",
        "explanation_images": []
      },
      {
        "id": "CALC1-10",
        "num": 10,
        "text": "Si f es una función PAR, entonces:",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "∫_b^a f(x) dx = 2 ∫_b^{-a} f(x) dx",
            "images": []
          },
          {
            "letter": "B",
            "text": "∫_b^a f(x) dx = 2 ∫_b^a f(x) dx = 0",
            "images": []
          },
          {
            "letter": "C",
            "text": "∫_b^a f(x) dx = 0",
            "images": []
          },
          {
            "letter": "D",
            "text": "∫_b^a f(x) dx = 2 ∫_b^a f(x) dx",
            "images": []
          }
        ],
        "answers": [
          "D"
        ],
        "multi": false,
        "explanation": "En el PDF está marcada la igualdad: ∫_b^a f(x) dx = 2∫_b^a f(x) dx. Si I = 2I, entonces I=0.",
        "explanation_images": []
      }
    ]
  },
  {
    "id": "calculo_ii",
    "title": "Cálculo II",
    "script": "repaso_calculo_ii.py",
    "questions": [
      {
        "id": "CALC2-01",
        "num": null,
        "text": "Una señal se describe mediante la función f(x, y, z) = xy + yz + xz. La dirección en la que la señal varía es:",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "∇f(x,y,z) = (y+z)î + (x+z)ĵ + (x+y)k̂",
            "images": []
          },
          {
            "letter": "B",
            "text": "∇f(x,y,z) = (x+z)î + (x+y)ĵ + (y+z)k̂",
            "images": []
          },
          {
            "letter": "C",
            "text": "∇f(x,y,z) = xî + yĵ + (x+y)k̂",
            "images": []
          },
          {
            "letter": "D",
            "text": "∇f(x,y,z) = (x+y)î + (y+z)ĵ + (x+z)k̂",
            "images": []
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "La dirección de mayor variación de una función escalar es su gradiente: ∇f = (∂f/∂x, ∂f/∂y, ∂f/∂z). Para f=xy+yz+xz: ∂/∂x=y+z, ∂/∂y=x+z, ∂/∂z=x+y.",
        "explanation_images": []
      },
      {
        "id": "CALC2-02",
        "num": null,
        "text": "Una partícula se mueve a lo largo de la curva f(t)=(t^3−4t)î+(t^2+4t)ĵ+(8t^2−3t^3)k̂. Para t=2 la velocidad es:",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "V(2) = 12",
            "images": []
          },
          {
            "letter": "B",
            "text": "V̄(2) = −8î − 8ĵ + 4k̂",
            "images": []
          },
          {
            "letter": "C",
            "text": "V(2) = 6",
            "images": []
          },
          {
            "letter": "D",
            "text": "V̄(2) = 8î + 8ĵ − 4k̂",
            "images": []
          }
        ],
        "answers": [
          "D"
        ],
        "multi": false,
        "explanation": "La velocidad es la derivada: v(t)=f′(t). Se deriva cada componente y se evalúa en t=2; el resultado vectorial coincide con 8î+8ĵ−4k̂.",
        "explanation_images": []
      },
      {
        "id": "CALC2-03",
        "num": null,
        "text": "El área de la región mostrada y definida por: y=√x, y=−x, x=0, x=4, se puede calcular mediante:",
        "images": [
          "images/calc2_q3_fig.png"
        ],
        "options": [
          {
            "letter": "A",
            "text": "A = ∫_{0}^{4} ∫_{-x}^{√x} dx dy",
            "images": []
          },
          {
            "letter": "B",
            "text": "A = ∫_{-4}^{2} ∫_{-x}^{√x} dx dy",
            "images": []
          },
          {
            "letter": "C",
            "text": "A = ∫_{0}^{4} ∫_{-x}^{√x} dy dx",
            "images": []
          },
          {
            "letter": "D",
            "text": "A = ∫_{-4}^{2} ∫_{-x}^{√x} dy dx",
            "images": []
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "Como la región está acotada por x entre 0 y 4, y para cada x el y va desde la recta y=−x hasta la curva y=√x. Por eso la forma correcta es: A = ∫_{0}^{4} ∫_{−x}^{√x} dy dx.",
        "explanation_images": []
      },
      {
        "id": "CALC2-04",
        "num": null,
        "text": "La circulación del campo vectorial F(x,y)=−y^3 î + x^3 ĵ a lo largo de la curva γ: x^2+z^2=1, en sentido antihorario, se calcula mediante:",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "C = ∮_γ F̄ · d**r**",
            "images": []
          },
          {
            "letter": "B",
            "text": "C = ∮_γ F × dr",
            "images": []
          },
          {
            "letter": "C",
            "text": "C = ∮_γ F̄ · d**t**",
            "images": []
          },
          {
            "letter": "D",
            "text": "C = ∮_γ F dx dy",
            "images": []
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "La circulación de un campo vectorial sobre una curva cerrada se define como la integral de línea: C=∮_γ F̄·dr.",
        "explanation_images": []
      },
      {
        "id": "CALC2-05",
        "num": null,
        "text": "El flujo entrante o saliente de un campo vectorial se determina mediante el:",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Rotacional",
            "images": []
          },
          {
            "letter": "B",
            "text": "Gradiente",
            "images": []
          },
          {
            "letter": "C",
            "text": "Divergencia",
            "images": []
          },
          {
            "letter": "D",
            "text": "Operador nabla",
            "images": []
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "El flujo neto (fuentes/sumideros) se relaciona con la divergencia (Teorema de Gauss).",
        "explanation_images": []
      },
      {
        "id": "CALC2-06",
        "num": null,
        "text": "Al cambiar el orden de integración de ∫_{0}^{1} ∫_{y}^{√y} f(x,y) dx dy, el resultado es:",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "∫_{0}^{1} ∫_{x^2}^{x} f(x,y) dy dx",
            "images": []
          },
          {
            "letter": "B",
            "text": "∫_{0}^{1} ∫_{0}^{x^2} f(x,y) dy dx",
            "images": []
          },
          {
            "letter": "C",
            "text": "∫_{0}^{1} ∫_{x}^{x^2} f(x,y) dy dx",
            "images": []
          },
          {
            "letter": "D",
            "text": "∫_{0}^{1} ∫_{x}^{1} f(x,y) dy dx",
            "images": []
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "La región es: 0≤y≤1 y y≤x≤√y. Al invertir el orden, queda 0≤x≤1 y x²≤y≤x. Por eso el resultado es ∫_{0}^{1} ∫_{x^2}^{x} f(x,y) dy dx.",
        "explanation_images": []
      },
      {
        "id": "CALC2-07",
        "num": null,
        "text": "La integral ∫_{0}^{4} ∫_{0}^{3} ∫_{0}^{√(9−z^2)} f(x,y) dy dx dz expresada en coordenadas cilíndricas es:",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "∫_{0}^{2π} ∫_{0}^{3} ∫_{0}^{4} r f(x,y) dz dr dθ",
            "images": []
          },
          {
            "letter": "B",
            "text": "∫_{0}^{π/2} ∫_{0}^{3} ∫_{0}^{4} f(x,y) dz dr dθ",
            "images": []
          },
          {
            "letter": "C",
            "text": "∫_{0}^{π/2} ∫_{0}^{3} ∫_{0}^{4} r f(x,y) dz dr dθ",
            "images": []
          },
          {
            "letter": "D",
            "text": "∫_{0}^{2π} ∫_{0}^{3} ∫_{0}^{4} f(x,y) dz dr dθ",
            "images": []
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "Según el formato del cuestionario, la opción correcta para esta conversión a coordenadas cilíndricas es la que usa θ de 0 a π/2 y el jacobiano r, es decir: ∫_{0}^{π/2} ∫_{0}^{3} ∫_{0}^{4} r f(x,y) dz dr dθ.",
        "explanation_images": []
      },
      {
        "id": "CALC2-08",
        "num": null,
        "text": "El dominio de la función f(t)=∛(t^2) î + (2−5t)^2 ĵ + ____ k̂ es:",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "ℝ − {0,2}",
            "images": []
          },
          {
            "letter": "B",
            "text": "ℝ − {0}",
            "images": []
          },
          {
            "letter": "C",
            "text": "ℝ",
            "images": []
          },
          {
            "letter": "D",
            "text": "ℝ − {2}",
            "images": []
          }
        ],
        "answers": [
          "D"
        ],
        "multi": false,
        "explanation": "Según la clave marcada en el cuestionario, la opción correcta indicada es ℝ − {2}.",
        "explanation_images": []
      },
      {
        "id": "CALC2-09",
        "num": null,
        "text": "Dada la función z = ln(2x − y), entonces ∂²z/(∂x∂y) es:",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "−2/(2x−y)^2",
            "images": []
          },
          {
            "letter": "B",
            "text": "1/(2x−y)^2",
            "images": []
          },
          {
            "letter": "C",
            "text": "−1/(2x−y)^2",
            "images": []
          },
          {
            "letter": "D",
            "text": "2/(2x−y)^2",
            "images": []
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "Según el formato corregido del cuestionario, la opción marcada como correcta para ∂²z/(∂x∂y) es −2/(2x−y)^2.",
        "explanation_images": []
      },
      {
        "id": "CALC2-10",
        "num": null,
        "text": "Dado el campo de fuerzas F(x,y)=(sen(2x−y), 3y−x^2), su matriz jacobiana es:",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "J(F̄(x,y)) = [[2cos(2x−y), −cos(2x−y)], [−2x, 3]]",
            "images": []
          },
          {
            "letter": "B",
            "text": "J(F̄(x,y)) = [[2cos(2x−y), +cos(2x−y)], [−2x, 3]]",
            "images": []
          },
          {
            "letter": "C",
            "text": "J(F̄(x,y)) = [[cos(2x−y), −2cos(2x−y)], [−x, 3]]",
            "images": []
          },
          {
            "letter": "D",
            "text": "J(F̄(x,y)) = [[2cos(2x−y), −cos(2x−y)], [−2x, −3]]",
            "images": []
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "La jacobiana es la matriz de derivadas parciales. Para F̄(x,y)=(sen(2x−y), 3y−x²): ∂F₁/∂x=2cos(2x−y), ∂F₁/∂y=−cos(2x−y), ∂F₂/∂x=−2x y ∂F₂/∂y=3.",
        "explanation_images": []
      }
    ]
  },
  {
    "id": "comunicacion_oral_y_escrita",
    "title": "Comunicación Oral y Escrita",
    "script": "repaso_comunicacion_oral_y_escrita.py",
    "questions": [
      {
        "id": "COE-01",
        "num": 1,
        "text": "Durante un debate universitario sobre diversidad cultural, varios estudiantes expresan \nopiniones diferentes. A pesar de sus desacuerdos, todos escuchan con atención y sin \ninterrumpirse, utilizando argumentos fundamentados sin atacar personalmente a sus \ncompañeros.  \n¿Este comportamiento refleja un principio ético que promueve la convivencia ciudadana?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "No, porque limita la libertad de expresión",
            "images": [
              "images/opts/coe_01_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Sí, porque demuestra respeto mutuo y tolerancia",
            "images": [
              "images/opts/coe_01_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "No, porque los estudiantes debieron evitar temas controversiales",
            "images": [
              "images/opts/coe_01_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Sí, porque todos deben pensar igual en una comunidad democrática",
            "images": [
              "images/opts/coe_01_D.png"
            ]
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "Según la clave del cuestionario (pág. 41 en adelante).",
        "explanation_images": []
      },
      {
        "id": "COE-02",
        "num": 2,
        "text": "Carla, una estudiante universitaria, participa activamente en jornadas de limpieza \ncomunitaria organizadas por el municipio. Además, respeta las normas de convivencia y \npromueve campañas informativas sobre el derecho al agua.",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "El ejercicio pasivo de sus derechos ciudadanos",
            "images": [
              "images/opts/coe_02_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "El cumplimiento de deberes constitucionales como la  corresponsabilidad social",
            "images": [
              "images/opts/coe_02_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Una acción sin valor jurídico en el contexto ciudadano",
            "images": [
              "images/opts/coe_02_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Una obligación exclusiva de las autoridades locales.",
            "images": [
              "images/opts/coe_02_D.png"
            ]
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "Según la clave del cuestionario (pág. 41 en adelante).",
        "explanation_images": []
      },
      {
        "id": "COE-03",
        "num": 3,
        "text": "¿Cuál es el propósito principal de la comunicación oral en contextos educativos y sociales, \nsegún los enfoques contemporáneos?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Transmitir conocimientos sin considerar la retroalimentación.",
            "images": [
              "images/opts/coe_03_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Impresionar al público con un lenguaje complejo.",
            "images": [
              "images/opts/coe_03_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Establecer un proceso interactivo que facilite el entendimiento mutuo y la construcción conjunta de significados.",
            "images": [
              "images/opts/coe_03_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Hablar fluidamente sin necesidad de escuchar a los demás.",
            "images": [
              "images/opts/coe_03_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "La comunicación oral, en enfoques contemporáneos, es un proceso interactivo: implica escuchar, retroalimentar y construir significados de manera conjunta.",
        "explanation_images": []
      },
      {
        "id": "COE-04",
        "num": 4,
        "text": "¿Qué técnica de comunicación oral se caracteriza por la exposición secuencial de \nponencias individuales sobre un tema común, sin interacción entre expositores y bajo la \nmoderación de un coordinador?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Debate",
            "images": [
              "images/opts/coe_04_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Panel",
            "images": [
              "images/opts/coe_04_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Simposio",
            "images": [
              "images/opts/coe_04_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Foro",
            "images": [
              "images/opts/coe_04_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "Según la clave del cuestionario (pág. 41 en adelante).",
        "explanation_images": []
      },
      {
        "id": "COE-05",
        "num": 5,
        "text": "¿Cuál de los siguientes aspectos es fundamental para lograr una presentación oral efectiva \nen la actualidad?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Memorizar el contenido palabra por palabra para asegurar precisión.",
            "images": [
              "images/opts/coe_05_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Utilizar una estructura organizada, recursos visuales pertinentes y lenguaje accesible al público.",
            "images": [
              "images/opts/coe_05_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Evitar recursos visuales para centrar toda la atención en el expositor.",
            "images": [
              "images/opts/coe_05_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Utilizar lenguaje técnico para demostrar dominio del tema.",
            "images": [
              "images/opts/coe_05_D.png"
            ]
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "Una presentación oral efectiva requiere organización, apoyo visual pertinente y un lenguaje claro adaptado al público.",
        "explanation_images": []
      },
      {
        "id": "COE-06",
        "num": 6,
        "text": "¿Cuál de los siguientes elementos es indispensable para que un párrafo académico sea \ncoherente y eficaz?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Uso de varias citas sin relación entre sí.",
            "images": [
              "images/opts/coe_06_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Inclusión de una idea principal clara desarrollada con oraciones de apoyo.",
            "images": [
              "images/opts/coe_06_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Repetición de la misma idea con sinónimos.",
            "images": [
              "images/opts/coe_06_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Enumeración de datos sin análisis.",
            "images": [
              "images/opts/coe_06_D.png"
            ]
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "Según la clave del cuestionario (pág. 41 en adelante).",
        "explanation_images": []
      },
      {
        "id": "COE-07",
        "num": 7,
        "text": "¿Qué aspecto define al ensayo académico en el ámbito universitario?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "La narración cronológica de eventos personales.",
            "images": [
              "images/opts/coe_07_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "La descripción de un tema sin tomar postura.",
            "images": [
              "images/opts/coe_07_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "La argumentación de una tesis o idea principal con base en fundamentos teóricos y reflexión crítica.",
            "images": [
              "images/opts/coe_07_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "La recopilación de citas sin interpretación personal.",
            "images": [
              "images/opts/coe_07_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "Un ensayo académico plantea una tesis y la defiende con argumentos, apoyándose en fundamentos teóricos y reflexión crítica.",
        "explanation_images": []
      },
      {
        "id": "COE-08",
        "num": 8,
        "text": "¿Cuál es el propósito principal de la lectura crítica en el desarrollo de habilidades verbales \nen el ámbito académico?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Memorizar información textual sin analizar su contenido.",
            "images": [
              "images/opts/coe_08_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Identificar solo datos superficiales del texto.",
            "images": [
              "images/opts/coe_08_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Evaluar el contenido, juzgar la validez de los argumentos y emitir un juicio fundamentado.",
            "images": [
              "images/opts/coe_08_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Leer en voz alta para mejorar la pronunciación.",
            "images": [
              "images/opts/coe_08_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "Según la clave del cuestionario (pág. 41 en adelante).",
        "explanation_images": []
      },
      {
        "id": "COE-09",
        "num": 9,
        "text": "¿Cuál es el propósito principal de la lectura crítica en el desarrollo de habilidades verbales \nen el ámbito académico?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Memorizar información textual sin analizar su contenido.",
            "images": [
              "images/opts/coe_09_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Identificar solo datos superficiales del texto.",
            "images": [
              "images/opts/coe_09_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Evaluar el contenido, juzgar la validez de los argumentos y emitir un juicio fundamentado.",
            "images": [
              "images/opts/coe_09_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Leer en voz alta para mejorar la pronunciación.",
            "images": [
              "images/opts/coe_09_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "Según la clave del cuestionario (pág. 41 en adelante).",
        "explanation_images": []
      },
      {
        "id": "COE-10",
        "num": 10,
        "text": "¿Cuál es la importancia de la etimología en el desarrollo del vocabulario académico y de \nespecialidad?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Facilita la escritura creativa en textos narrativos.",
            "images": [
              "images/opts/coe_10_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Permite la invención de nuevas palabras sin base formal.",
            "images": [
              "images/opts/coe_10_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Ayuda a comprender el origen, significado y uso correcto de términos técnicos.",
            "images": [
              "images/opts/coe_10_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Es útil únicamente para traducciones literarias.",
            "images": [
              "images/opts/coe_10_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "Según la clave del cuestionario (pág. 41 en adelante).",
        "explanation_images": []
      },
      {
        "id": "COE-11",
        "num": 11,
        "text": "¿Cuál de las siguientes opciones describe mejor la función de los signos de puntuación en \nla expresión escrita académica?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Adornar el texto sin necesidad de reglas específicas.",
            "images": [
              "images/opts/coe_11_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Determinar el estilo narrativo del autor.",
            "images": [
              "images/opts/coe_11_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Organizar el contenido, marcar pausas, jerarquizar ideas y evitar ambigüedades.",
            "images": [
              "images/opts/coe_11_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Sustituir palabras complejas para facilitar la lectura.",
            "images": [
              "images/opts/coe_11_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "Según la clave del cuestionario (pág. 41 en adelante).",
        "explanation_images": []
      }
    ]
  },
  {
    "id": "educacion_fisica",
    "title": "Educación Física",
    "script": "repaso_educacion_fisica.py",
    "questions": [
      {
        "id": "EF-01",
        "num": 1,
        "text": "Señale la respuesta correcta a la siguiente definición: “es una disciplina que se centra en diferentes movimientos corporales para perfeccionar, controlar y mantener la salud mental y física del ser humano”.",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Actividad Física",
            "images": [
              "images/opts/ef_01_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Recreación",
            "images": [
              "images/opts/ef_01_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Educación Física",
            "images": [
              "images/opts/ef_01_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Deporte",
            "images": [
              "images/opts/ef_01_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "La definición corresponde a Educación Física, porque se enfoca en el movimiento corporal para desarrollar y mantener la salud física y mental.",
        "explanation_images": []
      },
      {
        "id": "EF-02",
        "num": 2,
        "text": "En la disciplina de fútbol, ¿qué parte del pie se utiliza frecuentemente para realizar pases cortos, ya que proporciona mayor precisión al hacer que la pelota se desplace a ras del suelo?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Borde externo",
            "images": [
              "images/opts/ef_02_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Empeine",
            "images": [
              "images/opts/ef_02_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Borde interno",
            "images": [
              "images/opts/ef_02_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Punta del pie",
            "images": [
              "images/opts/ef_02_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "Para pases cortos y precisos se usa normalmente el borde interno del pie, porque permite mejor control y dirección del balón.",
        "explanation_images": []
      },
      {
        "id": "EF-03",
        "num": 3,
        "text": "El Test de Cooper y el test de 1000 metros sirven para medir:",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Velocidad",
            "images": [
              "images/opts/ef_03_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Flexibilidad",
            "images": [
              "images/opts/ef_03_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Fuerza",
            "images": [
              "images/opts/ef_03_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "VO₂ máx",
            "images": [
              "images/opts/ef_03_D.png"
            ]
          }
        ],
        "answers": [
          "D"
        ],
        "multi": false,
        "explanation": "Estas pruebas se usan para estimar la resistencia aeróbica y el consumo máximo de oxígeno, conocido como VO₂ máx.",
        "explanation_images": []
      },
      {
        "id": "EF-04",
        "num": 4,
        "text": "“Utilizado en situaciones donde se necesita precisión y rapidez, como en jugadas de transición rápida”, ¿a qué tipo de pase pertenece en el baloncesto?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Pase de pique",
            "images": [
              "images/opts/ef_04_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Pase de pecho",
            "images": [
              "images/opts/ef_04_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Pase sobre la cabeza",
            "images": [
              "images/opts/ef_04_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Pase de salto",
            "images": [
              "images/opts/ef_04_D.png"
            ]
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "El pase de pecho es rápido y preciso; por eso se usa mucho en jugadas de transición y circulación rápida del balón.",
        "explanation_images": []
      },
      {
        "id": "EF-05",
        "num": 5,
        "text": "La zona de ataque en la disciplina de voleibol posee una medida de:",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "3 metros",
            "images": [
              "images/opts/ef_05_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "6 metros",
            "images": [
              "images/opts/ef_05_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "9 metros",
            "images": [
              "images/opts/ef_05_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "12 metros",
            "images": [
              "images/opts/ef_05_D.png"
            ]
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "En voleibol, la línea de ataque está a 3 metros de la red; por eso la zona de ataque mide 3 metros.",
        "explanation_images": []
      },
      {
        "id": "EF-06",
        "num": 6,
        "text": "En la disciplina de fútbol, ¿qué parte del pie se utiliza frecuentemente para realizar golpes de potencia y distancias largas?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Borde externo",
            "images": [
              "images/opts/ef_06_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Empeine",
            "images": [
              "images/opts/ef_06_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Borde interno",
            "images": [
              "images/opts/ef_06_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Punta del pie",
            "images": [
              "images/opts/ef_06_D.png"
            ]
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "Para golpes fuertes y de larga distancia se usa el empeine, porque permite aplicar mayor potencia al balón.",
        "explanation_images": []
      },
      {
        "id": "EF-07",
        "num": 7,
        "text": "¿Cuánto dura cada cuarto en un partido profesional de la NBA?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "8 minutos",
            "images": [
              "images/opts/ef_07_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "10 minutos",
            "images": [
              "images/opts/ef_07_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "12 minutos",
            "images": [
              "images/opts/ef_07_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "14 minutos",
            "images": [
              "images/opts/ef_07_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "En la NBA, cada cuarto dura 12 minutos; el tiempo reglamentario total es de 48 minutos.",
        "explanation_images": []
      },
      {
        "id": "EF-08",
        "num": 8,
        "text": "¿Cuáles son las fases para ejecutar el golpe de derecha?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Posición inicial, preparación, ejecución, finalización",
            "images": [
              "images/opts/ef_08_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Posición inicial, preparación, impacto, finalización",
            "images": [
              "images/opts/ef_08_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Posición inicial, impacto, finalización",
            "images": [
              "images/opts/ef_08_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Posición inicial, control, impacto, finalización",
            "images": [
              "images/opts/ef_08_D.png"
            ]
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "El golpe de derecha se organiza en fases: posición inicial, preparación, impacto y finalización.",
        "explanation_images": []
      },
      {
        "id": "EF-09",
        "num": 9,
        "text": "¿La prueba de 110 metros vallas en atletismo la ejecutan las damas?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Verdadero",
            "images": [
              "images/opts/ef_09_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Falso",
            "images": [
              "images/opts/ef_09_B.png"
            ]
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "Es falso. La prueba de 110 metros vallas corresponde al atletismo masculino; en damas se compite tradicionalmente en 100 metros vallas.",
        "explanation_images": []
      },
      {
        "id": "EF-10",
        "num": 10,
        "text": "¿La altura de la red en voleibol para damas es de 2,44 metros?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Verdadero",
            "images": [
              "images/opts/ef_10_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Falso",
            "images": [
              "images/opts/ef_10_B.png"
            ]
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "Es falso. La altura reglamentaria de la red para voleibol femenino es de 2,24 metros.",
        "explanation_images": []
      }
    ]
  },
  {
    "id": "ecuaciones_diferenciales",
    "title": "Ecuaciones Diferenciales",
    "script": "repaso_ecuaciones_diferenciales.py",
    "questions": [
      {
        "id": "ED-01",
        "num": 1,
        "text": "La ecuación diferencial  d³y/dx³ + 2 (d²y/dx²)³ + dy/dx = tan x, es de:",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Orden 3 grado 1",
            "images": [
              "images/opts/ed_01_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Orden 2 grado 3",
            "images": [
              "images/opts/ed_01_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Orden 3 grado 3",
            "images": [
              "images/opts/ed_01_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Orden 2 grado 1",
            "images": [
              "images/opts/ed_01_D.png"
            ]
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "El orden es 3 porque la derivada de mayor orden es d³y/dx³. El grado es 1 porque esa derivada de mayor orden aparece a la primera potencia.",
        "explanation_images": []
      },
      {
        "id": "ED-02",
        "num": 2,
        "text": "La solución de la ecuación diferencial homogénea  y″ − 4y′ + 4y = 0  es:",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "y_g = C_1 e^{2x} + C_2 x e^{2x}",
            "images": [
              "images/opts/ed_02_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "y_g = (C_1 + C_2)e^{2x}",
            "images": [
              "images/opts/ed_02_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "y_g = C_1 e^{-2x} + C_2 x e^{-2x}",
            "images": [
              "images/opts/ed_02_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "y_g = (C_1 + C_2)e^{-2x}",
            "images": [
              "images/opts/ed_02_D.png"
            ]
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "La ecuación característica es r² − 4r + 4 = 0 = (r − 2)². Como tiene raíz doble r = 2, la solución general es y_g = C₁e^{2x} + C₂xe^{2x}.",
        "explanation_images": []
      },
      {
        "id": "ED-03",
        "num": 3,
        "text": "Si  y_g = C₁ + C₂e^{4x}  es solución general de la ecuación diferencial homogénea, entonces la solución particular de la no homogénea  y″ − 4y′ = xe^{4x}  es:",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "y_p = A x e^{4x}",
            "images": [
              "images/opts/ed_03_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "y_p = (Ax + B)e^{4x}",
            "images": [
              "images/opts/ed_03_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "y_p = x(Ax + B)e^{4x}",
            "images": [
              "images/opts/ed_03_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "y_p = (A + B)x e^{4x}",
            "images": [
              "images/opts/ed_03_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "Como e^{4x} ya pertenece a la solución homogénea, el ensayo para la particular debe multiplicarse por x. Para el término xe^{4x}, el ensayo adecuado es y_p = x(Ax + B)e^{4x}.",
        "explanation_images": []
      },
      {
        "id": "ED-04",
        "num": 4,
        "text": "Si una partícula tiene un campo de velocidades  V(x,y) = (2x − 3y)i + (−x + 2y)j. Para hallar la posición se resuelve el sistema:",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "x′ = 2x − 3y ; y′ = −x + 2y",
            "images": [
              "images/opts/ed_04_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "x = 2x′ − 3y′ ; y = −x′ + 2y′",
            "images": [
              "images/opts/ed_04_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "x′ + 2x − 3y = 0 ; y′ − x + 2y = 0",
            "images": [
              "images/opts/ed_04_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "x + 2x′ − 3y′ = 0 ; y − x′ + 2y′ = 0",
            "images": [
              "images/opts/ed_04_D.png"
            ]
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "La velocidad es la derivada de la posición respecto al tiempo. Por tanto, si V(x,y) = (2x − 3y, −x + 2y), entonces el sistema es x′ = 2x − 3y, y y′ = −x + 2y.",
        "explanation_images": []
      },
      {
        "id": "ED-05",
        "num": 5,
        "text": "La solución de la ecuación diferencial  d²y/dx² = e^{2x}  es:",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "y = e^{2x}/2 + C_1",
            "images": [
              "images/opts/ed_05_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "y = e^{2x}/2 + C_1 x^2 + C_2",
            "images": [
              "images/opts/ed_05_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "y = e^{2x}/4 + C_1 x + C_2",
            "images": [
              "images/opts/ed_05_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "y = e^{2x}/4 + (C_1 + C_2)x",
            "images": [
              "images/opts/ed_05_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "Integrando dos veces: y′ = e^{2x}/2 + C₁ y luego y = e^{2x}/4 + C₁x + C₂.",
        "explanation_images": []
      },
      {
        "id": "ED-06",
        "num": 6,
        "text": "El wronskiano de  e^{−x}  y  xe^{−x}  es:",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "e^{−x}",
            "images": [
              "images/opts/ed_06_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "2e^{−x}",
            "images": [
              "images/opts/ed_06_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "e^{−2x}",
            "images": [
              "images/opts/ed_06_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "e^{2x}",
            "images": [
              "images/opts/ed_06_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "W = det[[e^{−x}, xe^{−x}], [−e^{−x}, e^{−x} − xe^{−x}]] = e^{−2x}.",
        "explanation_images": []
      },
      {
        "id": "ED-07",
        "num": 7,
        "text": "La solución de la ecuación diferencial homogénea  y″ + y′ − 2y = 0  es:",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "y_g = C_1 e^{−2x} + C_2 e^x",
            "images": [
              "images/opts/ed_07_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "y_g = (C_1 + C_2)e^{2x}",
            "images": [
              "images/opts/ed_07_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "y_g = C_1 e^{−2x} + C_2 x e^x",
            "images": [
              "images/opts/ed_07_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "y_g = (C_1 + C_2)e^x",
            "images": [
              "images/opts/ed_07_D.png"
            ]
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "La ecuación característica es r² + r − 2 = 0 = (r + 2)(r − 1). Las raíces son r = −2 y r = 1, por eso y_g = C₁e^{−2x} + C₂e^x.",
        "explanation_images": []
      },
      {
        "id": "ED-08",
        "num": 8,
        "text": "La solución de la ecuación diferencial homogénea  y″ + 2y′ + 4y = 0  es:",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "y_g = e^x (C_1 cos(√3 x) − C_2 sen(√3 x))",
            "images": [
              "images/opts/ed_08_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "y_g = e^{−x} (C_1 cos(√3 x) − C_2 sen(√3 x))",
            "images": [
              "images/opts/ed_08_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "y_g = e^{−x} (C_1 cos(√3 x) + C_2 sen(√3 x))",
            "images": [
              "images/opts/ed_08_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "y_g = e^x (C_1 cos(√3 x) + C_2 sen(√3 x))",
            "images": [
              "images/opts/ed_08_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "La característica es r² + 2r + 4 = 0, cuyas raíces son r = −1 ± i√3. Entonces y_g = e^{−x}(C₁ cos(√3x) + C₂ sen(√3x)).",
        "explanation_images": []
      },
      {
        "id": "ED-09",
        "num": 9,
        "text": "Considere la ecuación diferencial parcial de segundo orden usada para modelado en propagación de señales:  4∂²u/∂x² − 2∂²u/∂x∂y + ∂²u/∂y² = 0. Esta ecuación se clasifica como:",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "No se puede clasificar",
            "images": [
              "images/opts/ed_09_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Hiperbólica",
            "images": [
              "images/opts/ed_09_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Parabólica",
            "images": [
              "images/opts/ed_09_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Elíptica",
            "images": [
              "images/opts/ed_09_D.png"
            ]
          }
        ],
        "answers": [
          "D"
        ],
        "multi": false,
        "explanation": "Para Au_xx + Bu_xy + Cu_yy = 0, se usa Δ = B² − 4AC. Aquí A = 4, B = −2 y C = 1, entonces Δ = (−2)² − 4·4·1 = 4 − 16 = −12 < 0. Por eso es elíptica.",
        "explanation_images": []
      },
      {
        "id": "ED-10",
        "num": 10,
        "text": "En una línea de transmisión, la carga q(t) almacenada en un condensador se rige por la ecuación diferencial ordinaria  dq/dt = −2q. Si se considera la condición inicial q(0) = 5, ¿cuál es la expresión de la carga q(t) en función del tiempo?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "q(t) = 5e^{2t}",
            "images": [
              "images/opts/ed_10_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "q(t) = 5e^{−2t}",
            "images": [
              "images/opts/ed_10_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "q(t) = 10e^{−2t}",
            "images": [
              "images/opts/ed_10_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "q(t) = 5 + e^{−2t}",
            "images": [
              "images/opts/ed_10_D.png"
            ]
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "La ecuación separable dq/dt = −2q tiene solución q(t) = Ce^{−2t}. Con q(0) = 5 se obtiene C = 5, así que q(t) = 5e^{−2t}.",
        "explanation_images": []
      }
    ]
  },
  {
    "id": "lineas_de_transmision_y_guias",
    "title": "Líneas de transmisión y guías",
    "script": "repaso_lineas_de_transmision_y_guias.py",
    "questions": [
      {
        "id": "LT-42",
        "num": 42,
        "text": "En una línea de transmisión, cuando el coeficiente de onda estacionaria es mayor a uno, se dice que:",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Existe reflexión total de la onda.",
            "images": [
              "images/opts/lt_42_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "La onda no se refleja.",
            "images": [
              "images/opts/lt_42_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Existe reflexión parcial de la onda.",
            "images": [
              "images/opts/lt_42_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "La onda desaparece.",
            "images": [
              "images/opts/lt_42_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "VSWR > 1 indica desadaptación en la línea. Eso significa que no toda la potencia se transmite a la carga y existe reflexión parcial de la onda.",
        "explanation_images": []
      },
      {
        "id": "LT-43",
        "num": 43,
        "text": "En una línea de transmisión, cuando el coeficiente de reflexión es igual a cero, se dice que:",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Existe reflexión total de la onda.",
            "images": [
              "images/opts/lt_43_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "La onda no se refleja.",
            "images": [
              "images/opts/lt_43_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Existe reflexión parcial de la onda.",
            "images": [
              "images/opts/lt_43_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "La onda desaparece.",
            "images": [
              "images/opts/lt_43_D.png"
            ]
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "Si el coeficiente de reflexión Γ = 0, la línea está perfectamente adaptada y no existe onda reflejada.",
        "explanation_images": []
      },
      {
        "id": "LT-44",
        "num": 44,
        "text": "Se desea acoplar las impedancias en una línea de transmisión sin perdidas con un Stub en cortocircuito conectado a la carga en paralelo. Para determinar la distancia a donde se debe colocar el Stub, en la Carta Smith, el movimiento debe ser:",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "De la carga hacia el generador (a favor de las manecillas del reloj)",
            "images": [
              "images/opts/lt_44_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Del generador hacia la carga (en contra de las manecillas del reloj)",
            "images": [
              "images/opts/lt_44_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "De la carga hacia el generador (en contra de las manecillas del reloj).",
            "images": [
              "images/opts/lt_44_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "No debe realizar ningún movimiento en la Carta Smith.",
            "images": [
              "images/opts/lt_44_D.png"
            ]
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "Para ubicar el punto de conexión del stub en la carta Smith se parte de la carga y se avanza hacia el generador, lo que corresponde al movimiento a favor de las manecillas del reloj.",
        "explanation_images": []
      },
      {
        "id": "LT-45",
        "num": 45,
        "text": "Considerando el modo de transmisión transverso electrico (TEmn) en una guía de onda rectangular, para que exista este modo, qué valores deben tener los subíndices m y n.",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "m igual a cero y n igual a cero.",
            "images": [
              "images/opts/lt_45_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "m o n iguales a cero, pero no ambos a la vez.",
            "images": [
              "images/opts/lt_45_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "m diferente de cero y n diferente de cero.",
            "images": [
              "images/opts/lt_45_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "m siempre igual a uno y n diferente de cero.",
            "images": [
              "images/opts/lt_45_D.png"
            ]
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "En una guía rectangular para modos TE_mn, uno de los subíndices puede ser cero, pero no ambos al mismo tiempo. Por ejemplo, TE10 sí existe y TE00 no existe.",
        "explanation_images": []
      },
      {
        "id": "LT-46",
        "num": 46,
        "text": "La velocidad de grupo está definida como:",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Cuando el espectro o grupo de frecuencias de interés sea estrecho y el medio de transmisión sea dispersivo, puede encontrarse una sola velocidad característica del grupo o paquetes de ondas.",
            "images": [
              "images/opts/lt_46_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Cuando el espectro o grupo de frecuencias de interés tenga un ancho de banda alto y el medio de transmisión sea poco dispersivo, puede encontrarse una sola velocidad característica del grupo o paquetes de ondas.",
            "images": [
              "images/opts/lt_46_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Cuando el grupo de ondas viajan a la velocidad de la luz por un medio dispersivo.",
            "images": [
              "images/opts/lt_46_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Cuando el espectro o grupo de frecuencias de interés sea estrecho y el medio de transmisión poco dispersivo, entonces puede encontrarse una sola velocidad característica del grupo o paquete de ondas.",
            "images": [
              "images/opts/lt_46_D.png"
            ]
          }
        ],
        "answers": [
          "D"
        ],
        "multi": false,
        "explanation": "Según el PDF, la definición correcta corresponde al literal D. La velocidad de grupo describe la propagación del paquete (envolvente) de ondas.",
        "explanation_images": []
      },
      {
        "id": "LT-47",
        "num": 47,
        "text": "Considerando una guía de onda rectangular, para que una onda se transmita en los modos TE o TM, ¿qué condición debe cumplir la longitud de onda de transmisión con la longitud de onda de corte?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "La longitud de onda de transmisión debe ser mayor a la longitud de onda de corte.",
            "images": [
              "images/opts/lt_47_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "La longitud de onda de transmisión debe ser menor a la longitud de onda de corte",
            "images": [
              "images/opts/lt_47_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "La longitud de onda de transmisión debe ser menor a la longitud de onda de corte, y deben estar en el orden de unos pocos MHz.",
            "images": [
              "images/opts/lt_47_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "La longitud de onda de transmisión debe ser mayor a la longitud de onda de corte, y debe estar en MHz.",
            "images": [
              "images/opts/lt_47_D.png"
            ]
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "Para que exista propagación en modos TE o TM se requiere f > f_c, lo cual es equivalente a que la longitud de onda de transmisión sea menor que la longitud de onda de corte.",
        "explanation_images": []
      },
      {
        "id": "LT-48",
        "num": 48,
        "text": "Defina un resonador como cavidad rectangular o cavidad circular.",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Es un dispositivo completamente cerrado por paredes ferromagnéticas que dispone de energía en su interior",
            "images": [
              "images/opts/lt_48_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Es un dispositivo completamente cerrado por paredes cuasi-conductoras que en su interior dispone de energía electromagnética.",
            "images": [
              "images/opts/lt_48_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Es un dispositivo completamente cerrado por paredes metálicas que en su interior dispone de energía electromagnética.",
            "images": [
              "images/opts/lt_48_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Es un dispositivo completamente cerrado por paredes dieléctricas que en su interior dispone de energía electromagnética.",
            "images": [
              "images/opts/lt_48_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "Un resonador es una cavidad completamente cerrada por paredes metálicas que almacena energía electromagnética en su interior.",
        "explanation_images": []
      },
      {
        "id": "LT-49",
        "num": 49,
        "text": "En un circuito resonante, ¿para qué sirve el factor de calidad?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "El factor de calidad es una medida de las perdidas en un circuito.",
            "images": [
              "images/opts/lt_49_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "El factor de calidad es una medida de las perdidas en un circuito, es decir, cuanto menor sea la resistencia R, (mayores pérdidas) el factor de calidad es alto.",
            "images": [
              "images/opts/lt_49_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "El factor de calidad es una medida de las perdidas en un circuito, es decir, cuanto mayor sea la resistencia R, (menor perdidas) el factor de calidad es bajo.",
            "images": [
              "images/opts/lt_49_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Es una medida de ganancia en un circuito, es decir cuando la resistencia R es alto el factor de calidad es alto.",
            "images": [
              "images/opts/lt_49_D.png"
            ]
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "El factor de calidad Q mide las pérdidas de un circuito resonante. Un Q alto implica menores pérdidas relativas de energía.",
        "explanation_images": []
      },
      {
        "id": "LT-50",
        "num": 50,
        "text": "Considerando un resonador montado en reflexión, explicar el funcionamiento de las figuras (a) y (b). De los cuatro literales cual es la respuesta correcta.",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "El sistema de excitación acopla potencia al resonador desde la línea de alimentación y recíprocamente acopla potencia desde el resonador a la línea, afectando la potencia reflejada que sigue una variación con la frecuencia como lo indica la figura (b): lejos de resonancia el resonador refleja prácticamente toda la potencia que le llega, comportándose como cortocircuito o circuito abierto, mientras que a frecuencias próximas a resonancia el resonador absorbe potencia disminuyendo la reflejada.",
            "images": [
              "images/opts/lt_50_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "El sistema de excitación acopla potencia al resonador desde la línea de alimentación y resonador a la línea, afectando la potencia reflejada que sigue una variación con la frecuencia como lo indica la figura (b): lejos de resonancia el resonador absorbe prácticamente toda la potencia que le llega.",
            "images": [
              "images/opts/lt_50_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "El sistema de excitación desacopla potencia al resonador desde la línea de alimentación y recíprocamente acopla potencia desde el resonador a la línea, afectando la potencia reflejada que sigue una variación con la frecuencia como lo indica la figura (b)",
            "images": [
              "images/opts/lt_50_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "El sistema de excitación desacopla la impedancia al resonador desde la línea de alimentación y recíprocamente acopla potencia desde el resonador a la línea.",
            "images": [
              "images/opts/lt_50_D.png"
            ]
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "En un resonador montado en reflexión, lejos de la frecuencia de resonancia la potencia reflejada es alta. Cerca de la resonancia, el resonador absorbe potencia y la potencia reflejada disminuye, tal como muestra la figura.",
        "explanation_images": []
      },
      {
        "id": "LT-51",
        "num": 51,
        "text": "En el generador de señales Klystron, para que exista la modulación de la velocidad, el voltaje aplicado debe ser:",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Bajo.",
            "images": [
              "images/opts/lt_51_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "100 voltios.",
            "images": [
              "images/opts/lt_51_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Alto, en el orden de Kilovoltios.",
            "images": [
              "images/opts/lt_51_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Medio, en el orden de 200 voltios.",
            "images": [
              "images/opts/lt_51_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "En un Klystron la modulación de velocidad requiere un voltaje alto, típicamente del orden de kilovoltios.",
        "explanation_images": []
      }
    ]
  },
  {
    "id": "antenas",
    "title": "Antenas",
    "script": "repaso_antenas.py",
    "questions": [
      {
        "id": "ANT-01",
        "num": 1,
        "text": "Una antena tiene una potencia de entrada de 10 W y emite una potencia radiada de 80 W en su dirección de máxima radiación. Si la antena isotrópica de referencia hubiera emitido 20 W para producir la misma intensidad de campo en esa dirección, ¿cuál es la ganancia de la antena en dBi?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "6 dBi",
            "images": [
              "images/opts/ant_01_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "9 dBi",
            "images": [
              "images/opts/ant_01_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "12 dBi",
            "images": [
              "images/opts/ant_01_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "15 dBi",
            "images": [
              "images/opts/ant_01_D.png"
            ]
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "G=10log10(80/20)=10log10(4)=6 dBi.",
        "explanation_images": []
      },
      {
        "id": "ANT-02",
        "num": 2,
        "text": "¿Qué parámetro de antena describe el ángulo angular en el que la potencia radiada de una antena cae a la mitad de su valor máximo (o -3 dB de su valor máximo)?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Polarización",
            "images": [
              "images/opts/ant_02_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Directividad",
            "images": [
              "images/opts/ant_02_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Ancho de haz a media potencia (HPBW)",
            "images": [
              "images/opts/ant_02_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Relación Adelante-Atrás (FBR)",
            "images": [
              "images/opts/ant_02_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "HPBW es el ancho a -3 dB (media potencia).",
        "explanation_images": []
      },
      {
        "id": "ANT-03",
        "num": 3,
        "text": "Una antena está diseñada para operar con una línea de transmisión de 50 Ω. Si la impedancia de entrada de la antena es de 75 Ω, ¿qué problema es más probable que ocurra?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Aumento de la ganancia de la antena.",
            "images": [
              "images/opts/ant_03_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Reducción del ancho de banda de la antena.",
            "images": [
              "images/opts/ant_03_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Desadaptación de impedancias y ondas estacionarias elevadas.",
            "images": [
              "images/opts/ant_03_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Mejora de la directividad de la antena.",
            "images": [
              "images/opts/ant_03_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "75Ω vs 50Ω causa desadaptación y VSWR alto.",
        "explanation_images": []
      },
      {
        "id": "ANT-04",
        "num": 4,
        "text": "Si una antena transmisora está emitiendo una onda electromagnética con su campo eléctrico oscilando en un plano vertical, ¿qué tipo de antena receptora sería ideal para maximizar la transferencia de energía?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Una antena con polarización horizontal.",
            "images": [
              "images/opts/ant_04_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Una antena con polarización circular.",
            "images": [
              "images/opts/ant_04_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Una antena con polarización vertical.",
            "images": [
              "images/opts/ant_04_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "La polarización no afecta la transferencia de energía.",
            "images": [
              "images/opts/ant_04_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "La máxima transferencia se logra con la misma polarización (vertical).",
        "explanation_images": []
      },
      {
        "id": "ANT-05",
        "num": 5,
        "text": "Una antena tiene una eficiencia de radiación del 90%. Si su directividad es de 15 dB, ¿cuál es su ganancia en dB?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "13.5 dB",
            "images": [
              "images/opts/ant_05_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "14.5 dB",
            "images": [
              "images/opts/ant_05_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "15.5 dB",
            "images": [
              "images/opts/ant_05_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "16.0 dB",
            "images": [
              "images/opts/ant_05_D.png"
            ]
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "G(dB)=D(dB)+10log10(η)=15+10log10(0.9)≈14.5 dB.",
        "explanation_images": []
      },
      {
        "id": "ANT-06",
        "num": 6,
        "text": "Un medidor de VSWR en una línea de transmisión de 50 Ω conectada a una antena muestra una lectura de 2:1. ¿Qué porcentaje de la potencia incidente está siendo reflejado hacia la fuente?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Aproximadamente 5.6%",
            "images": [
              "images/opts/ant_06_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Aproximadamente 11.1%",
            "images": [
              "images/opts/ant_06_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Aproximadamente 25.0%",
            "images": [
              "images/opts/ant_06_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Aproximadamente 50.0%",
            "images": [
              "images/opts/ant_06_D.png"
            ]
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "|Γ|=(S-1)/(S+1)=1/3 ⇒ Pref=|Γ|²=1/9≈11.1%.",
        "explanation_images": []
      },
      {
        "id": "ANT-07",
        "num": 7,
        "text": "Un radioaficionado desea construir un monopolo de cuarto de onda para una frecuencia de 27 MHz. Si el monopolo se va a instalar sobre un plano de tierra perfectamente conductor y se considera un factor de velocidad de 0.96 para el conductor, ¿cuál debe ser la longitud física aproximada del monopolo en centímetros?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "278 cm",
            "images": [
              "images/opts/ant_07_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "267 cm",
            "images": [
              "images/opts/ant_07_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "139 cm",
            "images": [
              "images/opts/ant_07_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "133 cm",
            "images": [
              "images/opts/ant_07_D.png"
            ]
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "λ/4=(c/f)/4≈2.78m; con VF 0.96 ⇒ 2.67m.",
        "explanation_images": []
      },
      {
        "id": "ANT-08",
        "num": 8,
        "text": "¿Cómo se compara la impedancia de entrada de un monopolo de cuarto de onda (sobre un plano de tierra ideal) con la de un dipolo de media onda en el espacio libre?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "La impedancia del monopolo es el doble que la del dipolo.",
            "images": [
              "images/opts/ant_08_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "La impedancia del monopolo es la mitad que la del dipolo.",
            "images": [
              "images/opts/ant_08_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "La impedancia del monopolo es igual a la del dipolo.",
            "images": [
              "images/opts/ant_08_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "La impedancia del monopolo es independiente de la del dipolo",
            "images": [
              "images/opts/ant_08_D.png"
            ]
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "Monopolo λ/4 ≈ la mitad de impedancia del dipolo λ/2.",
        "explanation_images": []
      },
      {
        "id": "ANT-09",
        "num": 9,
        "text": "Un arreglo lineal uniforme de N elementos, espaciados d=λ/2, está diseñado para tener su haz principal en la dirección θ=90°. Si se duplica el número de elementos N (manteniendo el mismo espaciado), ¿cómo se espera que cambie el ancho de haz del lóbulo principal?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Se duplica.",
            "images": [
              "images/opts/ant_09_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Se reduce a la mitad.",
            "images": [
              "images/opts/ant_09_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Permanece igual.",
            "images": [
              "images/opts/ant_09_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Se reduce en un factor de √2",
            "images": [
              "images/opts/ant_09_D.png"
            ]
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "Al duplicar N manteniendo d=λ/2, se duplica aproximadamente la apertura eléctrica del arreglo, por lo que el haz principal se hace más angosto. Aproximadamente, el ancho de haz es inversamente proporcional a N, así que se reduce a la mitad.",
        "explanation_images": []
      },
      {
        "id": "ANT-10",
        "num": 10,
        "text": "Una antena Yagi-Uda es un tipo de arreglo de antenas muy común. Identifica la función principal de los elementos pasivos (director y reflector) en una antena Yagi-Uda.",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "El director y el reflector se utilizan para ajustar la impedancia de la antena.",
            "images": [
              "images/opts/ant_10_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "El director y el reflector generan una onda de polarización circular.",
            "images": [
              "images/opts/ant_10_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "El director enfoca la radiación hacia adelante y el reflector la refleja desde atrás, mejorando la directividad.",
            "images": [
              "images/opts/ant_10_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "El director y el reflector actúan como elementos de alimentación auxiliares para aumentar la potencia total.",
            "images": [
              "images/opts/ant_10_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "Director y reflector aumentan directividad (enfocan hacia adelante).",
        "explanation_images": []
      }
    ]
  },
  {
    "id": "analisis_de_senales",
    "title": "Análisis de señales",
    "script": "repaso_analisis_de_senales.py",
    "questions": [
      {
        "id": "AS-01",
        "num": 1,
        "text": "Una estación de radio FM transmite música con un ancho de banda máximo de 15 kHz. Si se desea digitalizar esta señal para su transmisión en línea, ¿cuál es la frecuencia de muestreo mínima requerida para evitar la pérdida de información significativa?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "7.5 kHz",
            "images": [
              "images/opts/as_01_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "15 kHz",
            "images": [
              "images/opts/as_01_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "30 kHz",
            "images": [
              "images/opts/as_01_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "44.1 kHz",
            "images": [
              "images/opts/as_01_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "Por Nyquist: f_s ≥ 2·f_max = 2·15 kHz = 30 kHz.",
        "explanation_images": []
      },
      {
        "id": "AS-02",
        "num": 2,
        "text": "Un sensor de temperatura produce una señal analógica que varía con una frecuencia máxima de 50 Hz. Si esta señal se va a procesar digitalmente, ¿cuál debería ser la frecuencia de muestreo mínima para garantizar una representación fiel de la señal original?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "25 Hz",
            "images": [
              "images/opts/as_02_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "50 Hz",
            "images": [
              "images/opts/as_02_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "75 Hz",
            "images": [
              "images/opts/as_02_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "100 Hz",
            "images": [
              "images/opts/as_02_D.png"
            ]
          }
        ],
        "answers": [
          "D"
        ],
        "multi": false,
        "explanation": "Por Nyquist: f_s ≥ 2·50 Hz = 100 Hz.",
        "explanation_images": []
      },
      {
        "id": "AS-03",
        "num": 3,
        "text": "Una imagen digital a color tiene una resolución de 1920×1080 píxeles. Si cada píxel se representa con 24 bits (color verdadero),",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "6.22 MB",
            "images": [
              "images/opts/as_03_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "5.93 MB",
            "images": [
              "images/opts/as_03_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "4.95 MB",
            "images": [
              "images/opts/as_03_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "15.55 MB",
            "images": [
              "images/opts/as_03_D.png"
            ]
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "Tamaño = 1920·1080·24 bits = 1920·1080·3 bytes = 6,220,800 bytes ≈ 5.93 MB.",
        "explanation_images": []
      },
      {
        "id": "AS-04",
        "num": 4,
        "text": "Se desea almacenar una animación digital que consta de 300 fotogramas (frames), donde cada fotograma tiene una resolución de 640×480 píxeles y utiliza 16 bits por píxel para su representación de color. ¿Cuál es la cantidad total de memoria requerida para la animación completa?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "18.43 MB",
            "images": [
              "images/opts/as_04_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "17.58 MB",
            "images": [
              "images/opts/as_04_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "27.65 MB",
            "images": [
              "images/opts/as_04_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "36.86 MB",
            "images": [
              "images/opts/as_04_D.png"
            ]
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "Memoria total = 300·640·480·16 bits. (Según las opciones del cuestionario, corresponde al literal B).",
        "explanation_images": []
      },
      {
        "id": "AS-05",
        "num": 5,
        "text": "Una cámara de seguridad graba video en escala de grises. Cada fotograma tiene una resolución de 1280×720 píxeles y cada píxel se almacena con 8 bits de información de intensidad. Si se graba un minuto de video a una tasa de 25 fotogramas por segundo (fps), ¿cuánta memoria se generará?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "135 MB",
            "images": [
              "images/opts/as_05_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "168.75 MB",
            "images": [
              "images/opts/as_05_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "175.78 MB",
            "images": [
              "images/opts/as_05_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "200 MB",
            "images": [
              "images/opts/as_05_D.png"
            ]
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "Según la clave del cuestionario, la opción correcta es B (168.75 MB). Nota: con 8 bits/píxel el cálculo físico daría ~1.38 GB/min, pero aquí se sigue la clave del PDF.",
        "explanation_images": []
      },
      {
        "id": "AS-06",
        "num": 6,
        "text": "Un sistema LTI tiene una respuesta al impulso h[n]={1,2,1} para n=0,1,2 y 0 en otro caso. Si la entrada del sistema es x[n]={3,4} para n=0,1 y 0 en otro caso, ¿cuál es la salida y[n] del sistema?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "y[n]={3,10,11,4}",
            "images": [
              "images/opts/as_06_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "y[n]={3,6,8,4}",
            "images": [
              "images/opts/as_06_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "y[n]={1,2,3,4}",
            "images": [
              "images/opts/as_06_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "y[n]={3,4,1,2,1}",
            "images": [
              "images/opts/as_06_D.png"
            ]
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "Convolución: y = x*h = {3,10,11,4}.",
        "explanation_images": []
      },
      {
        "id": "AS-07",
        "num": 7,
        "text": "Considera un sistema LTI discreto con una respuesta al impulso h[n] que es causal (es decir, h[n]=0 para n<0). Si la región de convergencia (ROC) de la Transformada Z de h[n] incluye el círculo unitario, ¿qué característica fundamental tiene el sistema?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Es inestable.",
            "images": [
              "images/opts/as_07_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Es no causal.",
            "images": [
              "images/opts/as_07_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Es estable.",
            "images": [
              "images/opts/as_07_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Es de fase mínima.",
            "images": [
              "images/opts/as_07_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "Si la ROC incluye el círculo unitario, el sistema es estable.",
        "explanation_images": []
      },
      {
        "id": "AS-08",
        "num": 8,
        "text": "La ecuación de diferencia de un sistema LTI discreto es y[n]−0.5y[n−1]=x[n]. Si se sabe que el sistema es causal, ¿cuál es la Transformada Z de su respuesta al impulso H(z) y cuál es su Región de Convergencia (ROC)?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "H(z) = 1/(1 + 0.5 z^{-1}),   ROC: |z| > 0.5",
            "images": [
              "images/opts/as_08_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "H(z) = 1/(1 - 0.5 z^{-1}),   ROC: |z| > 0.5",
            "images": [
              "images/opts/as_08_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "H(z) = 1/(1 - 0.5 z^{-1}),   ROC: |z| < 0.5",
            "images": [
              "images/opts/as_08_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "H(z) = 1/(1 - 2 z^{-1}),     ROC: |z| > 2",
            "images": [
              "images/opts/as_08_D.png"
            ]
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "Tomando Transformada Z: Y(z) - 0.5 z^{-1}Y(z) = X(z) ⇒ H(z)=Y/X = 1/(1-0.5 z^{-1}). Como el sistema es causal, la ROC está fuera del polo: |z| > 0.5.",
        "explanation_images": []
      },
      {
        "id": "AS-09",
        "num": 9,
        "text": "Un ingeniero de audio está diseñando un filtro digital para eliminar un zumbido de baja frecuencia. Si elige un filtro cuya respuesta al impulso h[n] tiene una duración finita (es decir, h[n]=0 después de un cierto valor de n), ¿a qué tipo de filtro se refiere?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Filtro IIR (Respuesta al Impulso Infinita)",
            "images": [
              "images/opts/as_09_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Filtro Analógico",
            "images": [
              "images/opts/as_09_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Filtro FIR (Respuesta al Impulso Finita)",
            "images": [
              "images/opts/as_09_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Filtro Adaptativo",
            "images": [
              "images/opts/as_09_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "Respuesta al impulso finita ⇒ FIR.",
        "explanation_images": []
      },
      {
        "id": "AS-10",
        "num": 10,
        "text": "¿Cuál es la principal característica de la respuesta en frecuencia de un filtro Butterworth, que lo distingue de otros tipos de filtros como Chebyshev o elípticos?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Presenta rizado en la banda de paso y en la banda de atenuación.",
            "images": [
              "images/opts/as_10_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Su respuesta en la banda de paso es máximamente plana.",
            "images": [
              "images/opts/as_10_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Posee la transición más abrupta entre la banda de paso y la banda de atenuación para un orden dado.",
            "images": [
              "images/opts/as_10_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Requiere el menor orden para cumplir con una especificación de atenuación dada.",
            "images": [
              "images/opts/as_10_D.png"
            ]
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "Butterworth: respuesta en banda de paso máximamente plana (sin rizado).",
        "explanation_images": []
      }
    ]
  },
  {
    "id": "comunicaciones_i",
    "title": "Comunicaciones I",
    "script": "repaso_comunicaciones_i.py",
    "questions": [
      {
        "id": "COM1-01",
        "num": 1,
        "text": "La señal pasabanda para AM es:",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "𝐴𝑐[1 + 𝑚(𝑡)]𝐶𝑜𝑠𝑤𝑐𝑡",
            "images": [
              "images/opts/com1_01_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "𝐴[1 + 𝑚(𝑡)]𝑆𝑖𝑛𝑤𝑐𝑡",
            "images": [
              "images/opts/com1_01_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "[1+m(t)]𝐶𝑜𝑠𝑤𝑐𝑡",
            "images": [
              "images/opts/com1_01_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "𝐴[1 + 𝑚(𝑡)]𝐶𝑜𝑠𝑤𝑖𝑡",
            "images": [
              "images/opts/com1_01_D.png"
            ]
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "AM: s(t)=Ac[1+m(t)]cos(ωc t).",
        "explanation_images": []
      },
      {
        "id": "COM1-02",
        "num": 2,
        "text": "g(t) para la modulación AM es:",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "1 + 𝑚(𝑡)",
            "images": [
              "images/opts/com1_02_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "𝑚(𝑡)",
            "images": [
              "images/opts/com1_02_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Ac m(t)",
            "images": [
              "images/opts/com1_02_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "𝐴(1 + 𝑚(𝑡))",
            "images": [
              "images/opts/com1_02_D.png"
            ]
          }
        ],
        "answers": [
          "D"
        ],
        "multi": false,
        "explanation": "Según la clave del cuestionario, la respuesta correcta es la D.",
        "explanation_images": []
      },
      {
        "id": "COM1-03",
        "num": 3,
        "text": "El valor de Ac corresponde a:",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "El nivel de la envolvente de AM en ausencia de modulación",
            "images": [
              "images/opts/com1_03_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "El nivel de la envolvente de AM en el valor medio de la modulación.",
            "images": [
              "images/opts/com1_03_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "El nivel medio de m(t)",
            "images": [
              "images/opts/com1_03_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "El nivel medio de c(t)",
            "images": [
              "images/opts/com1_03_D.png"
            ]
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "Ac es el nivel de la envolvente sin modulación.",
        "explanation_images": []
      },
      {
        "id": "COM1-04",
        "num": 4,
        "text": "La potencia de s(t) de AM contiene:",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Potencia de bandas laterales más la portadora",
            "images": [
              "images/opts/com1_04_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Potencia de las bandas laterales",
            "images": [
              "images/opts/com1_04_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Potencia de la portadora",
            "images": [
              "images/opts/com1_04_C.png"
            ]
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "Potencia total = portadora + bandas laterales.",
        "explanation_images": []
      },
      {
        "id": "COM1-05",
        "num": 5,
        "text": "La señal de S(f) de AM corresponde a:",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "(Ac/2)[δ(f − f_c) + M(f − f_c) + δ(f + f_c) + M(f + f_c)]",
            "images": [
              "images/opts/com1_05_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Ac·δ(f − f_c) + M(f − f_c) + δ(f + f_c) + M(f + f_c)",
            "images": [
              "images/opts/com1_05_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "(Ac/2)[M(f − f_c) + M(f + f_c)]",
            "images": [
              "images/opts/com1_05_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "(Ac/2)·δ(f − f_c) + M(f − f_c) + δ(f + f_c) − M(f + f_c)",
            "images": [
              "images/opts/com1_05_D.png"
            ]
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "Para AM con portadora: s(t)=Ac[1+m(t)]cos(2πf_c t). En frecuencia aparecen líneas δ en ±f_c y las bandas laterales M(f±f_c) escaladas por Ac/2. Por eso la opción A.",
        "explanation_images": []
      },
      {
        "id": "COM1-06",
        "num": 6,
        "text": "La sobremodulación produce:",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Interferencias debido al cruce de las envolventes",
            "images": [
              "images/opts/com1_06_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Interferencias debido a la Ac de la portadora",
            "images": [
              "images/opts/com1_06_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Interferencias debido a la amplitud de m(t)",
            "images": [
              "images/opts/com1_06_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "No produce interferencias",
            "images": [
              "images/opts/com1_06_D.png"
            ]
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "Sobremodulación provoca cruce de envolvente y distorsión.",
        "explanation_images": []
      },
      {
        "id": "COM1-07",
        "num": 7,
        "text": "¿Cuál es el porcentaje de modulación que permite que la envolvente alcance los límites superior e inferior de la portadora?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "100%",
            "images": [
              "images/opts/com1_07_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "50%",
            "images": [
              "images/opts/com1_07_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "33.33%",
            "images": [
              "images/opts/com1_07_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "40%",
            "images": [
              "images/opts/com1_07_D.png"
            ]
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "m=1 (100%) es el límite sin distorsión.",
        "explanation_images": []
      },
      {
        "id": "COM1-08",
        "num": 8,
        "text": "¿Cuáles son los valores Amax y Amin para un índice de modulación m=0.4?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Amax=1.4 y Amin=0.6",
            "images": [
              "images/opts/com1_08_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Amax=1 y Amin=-1",
            "images": [
              "images/opts/com1_08_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Amax=0.4 y Amin=1.6",
            "images": [
              "images/opts/com1_08_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Ninguna de las anteriores",
            "images": [
              "images/opts/com1_08_D.png"
            ]
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "Amax=1+m=1.4, Amin=1-m=0.6.",
        "explanation_images": []
      },
      {
        "id": "COM1-09",
        "num": 9,
        "text": "Si m<1, se dice:",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Existe sobremodulación",
            "images": [
              "images/opts/com1_09_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "No hay sobremodulación",
            "images": [
              "images/opts/com1_09_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Modulación perfecta",
            "images": [
              "images/opts/com1_09_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "No hay modulación",
            "images": [
              "images/opts/com1_09_D.png"
            ]
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "Si m<1 no hay sobremodulación.",
        "explanation_images": []
      },
      {
        "id": "COM1-10",
        "num": 10,
        "text": "La modulación en la señal VSB sin portadora se puede recuperar con:",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Detector de producto",
            "images": [
              "images/opts/com1_10_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Detector de envolvente",
            "images": [
              "images/opts/com1_10_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "PLL",
            "images": [
              "images/opts/com1_10_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Lazo de Costas",
            "images": [
              "images/opts/com1_10_D.png"
            ]
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "VSB sin portadora requiere detección coherente (detector de producto).",
        "explanation_images": []
      }
    ]
  },
  {
    "id": "comunicaciones_ii",
    "title": "Comunicaciones II",
    "script": "repaso_comunicaciones_ii.py",
    "questions": [
      {
        "id": "COM2-01",
        "num": 1,
        "text": "En un sistema PCM de cuantización uniforme cual es el mínimo error de cuantización posible:",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Δ",
            "images": [
              "images/opts/com2_01_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "2Δ",
            "images": [
              "images/opts/com2_01_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Δ/2",
            "images": [
              "images/opts/com2_01_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "0",
            "images": [
              "images/opts/com2_01_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "En cuantización uniforme, el error de cuantización e_q está acotado por ±Δ/2. Por tanto, el error máximo en magnitud es Δ/2 (y el mínimo posible puede ser 0 cuando cae exacto en un nivel, pero la cota característica del error es ±Δ/2). Según el PDF, la opción marcada es Δ/2.",
        "explanation_images": []
      },
      {
        "id": "COM2-02",
        "num": 2,
        "text": "La velocidad de transferencia de baudios de una señal multinivel con agrupación de 4 bits, frecuencia de muestreo de 900 KHz, CNU de 7 bits y funciones Sa generadoras es de:",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "1.320 MBaudios",
            "images": [
              "images/opts/com2_02_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "1.575 MBaudios",
            "images": [
              "images/opts/com2_02_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "6300 kBaudios",
            "images": [
              "images/opts/com2_02_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "6600 kBaudios",
            "images": [
              "images/opts/com2_02_D.png"
            ]
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "Rb=fs*CNU=900k*7=6.3Mbps; 4 bits/símbolo ⇒ Rs=1.575MBd.",
        "explanation_images": []
      },
      {
        "id": "COM2-03",
        "num": 3,
        "text": "¿Cuál de las siguientes señalizaciones digitales evita la discontinuidad en modulación BPSK?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Unipolar No Retorno a Cero",
            "images": [
              "images/opts/com2_03_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Bipolar No Retorno a Cero",
            "images": [
              "images/opts/com2_03_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Polar No Retorno a Cero",
            "images": [
              "images/opts/com2_03_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Manchester",
            "images": [
              "images/opts/com2_03_D.png"
            ]
          }
        ],
        "answers": [
          "D"
        ],
        "multi": false,
        "explanation": "Según el PDF, la señalización que evita discontinuidades en BPSK es Manchester.",
        "explanation_images": []
      },
      {
        "id": "COM2-04",
        "num": 4,
        "text": "¿Cuántos estados se tiene de una codificación de canal convolucional (2,1,3)?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "2",
            "images": [
              "images/opts/com2_04_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "8",
            "images": [
              "images/opts/com2_04_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "16",
            "images": [
              "images/opts/com2_04_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "4",
            "images": [
              "images/opts/com2_04_D.png"
            ]
          }
        ],
        "answers": [
          "D"
        ],
        "multi": false,
        "explanation": "Estados de codificación (2,1,3): 2^(K-1)=2^2=4.",
        "explanation_images": []
      },
      {
        "id": "COM2-05",
        "num": 5,
        "text": "Aplique la decodificación Haming (15,11) extendida de la siguiente secuencia de bits 011000111101011 con b",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "11001100111",
            "images": [
              "images/opts/com2_05_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "10011001011",
            "images": [
              "images/opts/com2_05_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "10001011001",
            "images": [
              "images/opts/com2_05_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "01100111001",
            "images": [
              "images/opts/com2_05_D.png"
            ]
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "Según el PDF, la decodificación Hamming (15,11) extendida da como salida 10011001011.",
        "explanation_images": []
      },
      {
        "id": "COM2-06",
        "num": 6,
        "text": "¿Cuál es el ancho de banda de la modulación ASK?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "B = R",
            "images": [
              "images/opts/com2_06_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "B = R/2",
            "images": [
              "images/opts/com2_06_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "B = 2R",
            "images": [
              "images/opts/com2_06_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "B = 3R",
            "images": [
              "images/opts/com2_06_D.png"
            ]
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "Según el PDF, el ancho de banda de ASK se toma como B = R.",
        "explanation_images": []
      },
      {
        "id": "COM2-07",
        "num": 7,
        "text": "Una señal de 64-QAM se transmite a una tasa de símbolo de 100 kB/s (kilo símbolos por segundo). ¿Cuál es la tasa de transmisión de datos en kbps?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "6400 kbps",
            "images": [
              "images/opts/com2_07_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "1200 kbps",
            "images": [
              "images/opts/com2_07_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "600 kbps",
            "images": [
              "images/opts/com2_07_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "100 kbps",
            "images": [
              "images/opts/com2_07_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "64-QAM: 6 bits/símbolo; 100 ksym/s ⇒ 600 kbps.",
        "explanation_images": []
      },
      {
        "id": "COM2-08",
        "num": 8,
        "text": "¿Cuál es la principal desventaja del acceso múltiple por división en el tiempo (TDMA) en sistemas móviles?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Su complejidad computacional es muy alta",
            "images": [
              "images/opts/com2_08_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Los usuarios pueden transmitir de manera continua sin interrupciones.",
            "images": [
              "images/opts/com2_08_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Requiere sincronización precisa para evitar interferencias entre usuarios.",
            "images": [
              "images/opts/com2_08_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "No es compatible con señales digitales",
            "images": [
              "images/opts/com2_08_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "TDMA requiere sincronización precisa para evitar interferencia.",
        "explanation_images": []
      },
      {
        "id": "COM2-09",
        "num": 9,
        "text": "¿Cuál de los siguientes esquemas es más eficiente para transmitir múltiples flujos de datos simultáneamente en un entorno con usuarios móviles?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "AM",
            "images": [
              "images/opts/com2_09_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "TDMA.",
            "images": [
              "images/opts/com2_09_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "OFDMA",
            "images": [
              "images/opts/com2_09_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "FM",
            "images": [
              "images/opts/com2_09_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "OFDMA es eficiente para multiusuario móvil.",
        "explanation_images": []
      },
      {
        "id": "COM2-10",
        "num": 10,
        "text": "¿Cuáles son las condiciones que debe cumplir un filtro de Nyquist? (Hay más de una respuesta)",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Simétrica respecto al origen",
            "images": [
              "images/opts/com2_10_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Simétrica respecto al eje y",
            "images": [
              "images/opts/com2_10_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Simétrica e impar centrada f₀",
            "images": [
              "images/opts/com2_10_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Simétrica y par centrada f₀",
            "images": [
              "images/opts/com2_10_D.png"
            ]
          }
        ],
        "answers": [
          "B",
          "D"
        ],
        "multi": true,
        "explanation": "Según el PDF, las correctas son B y D.",
        "explanation_images": []
      }
    ]
  },
  {
    "id": "comunicaciones_inalambricas",
    "title": "Comunicaciones Inalámbricas",
    "script": "repaso_comunicaciones_inalambricas.py",
    "questions": [
      {
        "id": "W-01",
        "num": 1,
        "text": "¿Cuál es la clasificación de tecnologías inalámbricas según el alcance y su aplicabilidad?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Bluetooth, DECT",
            "images": [
              "images/opts/w_01_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Zigbee, NFC,",
            "images": [
              "images/opts/w_01_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "RFID, IrDa,",
            "images": [
              "images/opts/w_01_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "WLAN, WMAN, WWAN",
            "images": [
              "images/opts/w_01_D.png"
            ]
          },
          {
            "letter": "E",
            "text": "Todas las enteriores",
            "images": [
              "images/opts/w_01_E.png"
            ]
          }
        ],
        "answers": [
          "D"
        ],
        "multi": false,
        "explanation": "Según tu indicación para el repaso, la clasificación por alcance/aplicabilidad es WLAN, WMAN, WWAN (literal D).",
        "explanation_images": []
      },
      {
        "id": "W-02",
        "num": 2,
        "text": "¿Cuántos dispositivos pueden soportar 3piconets, si cada piconet tiene el máximo número permitido de dispositivos?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "8",
            "images": [
              "images/opts/w_02_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "3",
            "images": [
              "images/opts/w_02_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "24",
            "images": [
              "images/opts/w_02_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "21",
            "images": [
              "images/opts/w_02_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "3 piconets * 8 dispositivos activos = 24.",
        "explanation_images": []
      },
      {
        "id": "W-03",
        "num": 3,
        "text": "Dado un numero de slots activos igual a 3. Determinar la duración de los slots en bits.",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "1200",
            "images": [
              "images/opts/w_03_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "1900",
            "images": [
              "images/opts/w_03_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "1920",
            "images": [
              "images/opts/w_03_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "1320",
            "images": [
              "images/opts/w_03_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "Según tu indicación para el repaso, se considera correcta la C (1920 bits).",
        "explanation_images": []
      },
      {
        "id": "W-04",
        "num": 4,
        "text": "Cuáles son los componentes del código de producto único EPC (tecnología RFID)",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Cabecera",
            "images": [
              "images/opts/w_04_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Información del destinatario",
            "images": [
              "images/opts/w_04_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "IP origen",
            "images": [
              "images/opts/w_04_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "IP destino",
            "images": [
              "images/opts/w_04_D.png"
            ]
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "Según el PDF, el componente del EPC (RFID) es la Cabecera (A).",
        "explanation_images": []
      },
      {
        "id": "W-05",
        "num": 5,
        "text": "Dada una probabilidad de transmisión de 0.05%, determine la ventana de contención (CW) normal y la CW después de que se hayan registrado 3 fallos en la transmisión, en los que en cada fallo la CW se decrementa en 1 respecto al decremento anterior.",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "39 y 77",
            "images": [
              "images/opts/w_05_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "39 y 301",
            "images": [
              "images/opts/w_05_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "39 y 154",
            "images": [
              "images/opts/w_05_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "39 y 152",
            "images": [
              "images/opts/w_05_D.png"
            ]
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "Según el PDF, la CW normal y la CW tras 3 fallos corresponde a 39 y 301 (B).",
        "explanation_images": []
      },
      {
        "id": "W-06",
        "num": 6,
        "text": "¿Cuál de los componentes siguientes utilizado en la cabecera de las tramas de WIFI me permite determinar el tiempo restante para que el medio o canal este libre?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "CTS",
            "images": [
              "images/opts/w_06_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "RTS",
            "images": [
              "images/opts/w_06_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "NAV",
            "images": [
              "images/opts/w_06_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "IFS",
            "images": [
              "images/opts/w_06_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "NAV indica tiempo restante de ocupación del medio.",
        "explanation_images": []
      },
      {
        "id": "W-07",
        "num": 7,
        "text": "¿Dentro de la tecnología Bluetooth el protocolo de conexión Active me permite?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Enviar mensajes de petición a otros dispositivos",
            "images": [
              "images/opts/w_07_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Escuchar mensajes cada 1.28 segundos",
            "images": [
              "images/opts/w_07_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "No transmitir datos, pero mantiene la conexión",
            "images": [
              "images/opts/w_07_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Transmisión de datos",
            "images": [
              "images/opts/w_07_D.png"
            ]
          }
        ],
        "answers": [
          "D"
        ],
        "multi": false,
        "explanation": "Modo Active permite transmisión de datos.",
        "explanation_images": []
      },
      {
        "id": "W-08",
        "num": 8,
        "text": "El estándar 802.11g que características técnicas tiene",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Velocidad de 54 Mbps y 50 m de alcance",
            "images": [
              "images/opts/w_08_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Velocidad de 11 Mbps y 100 m de alcance",
            "images": [
              "images/opts/w_08_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Velocidad de 54 Mbps y 100m (indoor) y 300m (outdoor) de alcance",
            "images": [
              "images/opts/w_08_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Velocidad de 600 Mbps y 250 m de alcance",
            "images": [
              "images/opts/w_08_D.png"
            ]
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "Según tu indicación para el repaso, se considera correcta la A (54 Mbps y ~50 m).",
        "explanation_images": []
      },
      {
        "id": "W-09",
        "num": 9,
        "text": "¿Cuál es la clase de tarjetas RFID que permite múltiples lecturas y una sola escritura?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Clase 0",
            "images": [
              "images/opts/w_09_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Clase 0+",
            "images": [
              "images/opts/w_09_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Clase 1",
            "images": [
              "images/opts/w_09_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Clase 1+",
            "images": [
              "images/opts/w_09_D.png"
            ]
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "Según el PDF, la clase que permite múltiples lecturas y una sola escritura es Clase 0+ (literal B).",
        "explanation_images": []
      },
      {
        "id": "W-10",
        "num": 10,
        "text": "El servicio de asociación realizado por los puntos de acceso permite verificar la identidad de las estaciones que desean conectarse a la red",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Verdadero",
            "images": [
              "images/opts/w_10_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Falso",
            "images": [
              "images/opts/w_10_B.png"
            ]
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "La verificación de identidad es autenticación, no asociación.",
        "explanation_images": []
      }
    ]
  },
  {
    "id": "comunicaciones_satelitales",
    "title": "Comunicaciones Satelitales",
    "script": "repaso_comunicaciones_satelitales.py",
    "questions": [
      {
        "id": "SAT-01",
        "num": 1,
        "text": "¿Cuál es un ejemplo típico de un sistema que utiliza un repetidor transparente?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Satélites de televisión",
            "images": [
              "images/opts/sat_01_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Redes 5G",
            "images": [
              "images/opts/sat_01_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Enlaces de datos de alta velocidad en fibra óptica",
            "images": [
              "images/opts/sat_01_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Comunicaciones de internet satelital LEO",
            "images": [
              "images/opts/sat_01_D.png"
            ]
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "TV satelital típica usa repetidor transparente (bent-pipe).",
        "explanation_images": []
      },
      {
        "id": "SAT-02",
        "num": 2,
        "text": "¿Qué tipo de repetidor encontrarías en un satélite de internet de banda ancha que procesa grandes volúmenes de datos y corrige errores antes de retransmitir?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Repetidor transparente",
            "images": [
              "images/opts/sat_02_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Repetidor regenerativo",
            "images": [
              "images/opts/sat_02_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Repetidor óptico",
            "images": [
              "images/opts/sat_02_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Repetidor de señal de microondas",
            "images": [
              "images/opts/sat_02_D.png"
            ]
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "Repetidor regenerativo procesa/demodula/corrige y remodula.",
        "explanation_images": []
      },
      {
        "id": "SAT-03",
        "num": 3,
        "text": "¿Cuál es el principal beneficio de utilizar un repetidor regenerativo en una constelación de satélites en órbita baja (LEO)?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Reducción de la latencia",
            "images": [
              "images/opts/sat_03_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Aumenta la potencia de la señal recibida en el receptor",
            "images": [
              "images/opts/sat_03_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Corrección de errores y mejora de la calidad de la señal",
            "images": [
              "images/opts/sat_03_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Uso eficiente del ancho de banda",
            "images": [
              "images/opts/sat_03_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "Mejora calidad por corrección/regeneración.",
        "explanation_images": []
      },
      {
        "id": "SAT-04",
        "num": 4,
        "text": "¿Cuál de los siguientes es un desafío técnico de los repetidores regenerativos en comparación con los transparentes?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Son más difíciles de implementar en sistemas analógicos",
            "images": [
              "images/opts/sat_04_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "No pueden ser utilizados en comunicaciones satelitales",
            "images": [
              "images/opts/sat_04_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Necesitan procesamiento digital avanzado",
            "images": [
              "images/opts/sat_04_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "No permiten transmitir datos a larga distancia",
            "images": [
              "images/opts/sat_04_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "Requiere procesamiento digital avanzado.",
        "explanation_images": []
      },
      {
        "id": "SAT-05",
        "num": 5,
        "text": "¿Qué proceso adicional realiza un repetidor regenerativo que un repetidor transparente no hace?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Cambio de frecuencia",
            "images": [
              "images/opts/sat_05_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Amplificación de la señal",
            "images": [
              "images/opts/sat_05_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Demodulación y regeneración de la señal",
            "images": [
              "images/opts/sat_05_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Duplicación de la señal",
            "images": [
              "images/opts/sat_05_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "Demodulación y regeneración adicional.",
        "explanation_images": []
      },
      {
        "id": "SAT-06",
        "num": 6,
        "text": "¿Qué banda es más usada para telefonía satelital móvil?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Ku",
            "images": [
              "images/opts/sat_06_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Ka",
            "images": [
              "images/opts/sat_06_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "L",
            "images": [
              "images/opts/sat_06_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "X",
            "images": [
              "images/opts/sat_06_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "Telefonía satelital móvil suele usar banda L.",
        "explanation_images": []
      },
      {
        "id": "SAT-07",
        "num": 7,
        "text": "Un satélite que parece estar fijo sobre el ecuador pertenece a la órbita:",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "LEO",
            "images": [
              "images/opts/sat_07_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "MEO",
            "images": [
              "images/opts/sat_07_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "HEO",
            "images": [
              "images/opts/sat_07_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "GEO",
            "images": [
              "images/opts/sat_07_D.png"
            ]
          }
        ],
        "answers": [
          "D"
        ],
        "multi": false,
        "explanation": "Satélite aparentemente fijo: GEO.",
        "explanation_images": []
      },
      {
        "id": "SAT-08",
        "num": 8,
        "text": "¿Qué coordenadas usarías para ubicar un satélite desde una estación en tierra?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "ENU",
            "images": [
              "images/opts/sat_08_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Geocéntricas",
            "images": [
              "images/opts/sat_08_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Inerciales",
            "images": [
              "images/opts/sat_08_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Todas son válidas",
            "images": [
              "images/opts/sat_08_D.png"
            ]
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "Desde una estación en tierra, lo que se necesita para 'ubicar' o apuntar al satélite es su dirección respecto al observador: azimut y elevación (y opcionalmente rango). Eso se obtiene en el sistema local topocéntrico ENU (East‑North‑Up). Aunque la posición del satélite también puede expresarse en marcos geocéntricos (ECEF) o inerciales (ECI), para el apuntamiento siempre se termina transformando a ENU para calcular azimut/elevación.",
        "explanation_images": []
      },
      {
        "id": "SAT-09",
        "num": 9,
        "text": "Si el satélite está sobre el meridiano 78.5°W, su longitud geográfica es:",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "+78.5°",
            "images": [
              "images/opts/sat_09_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "0°",
            "images": [
              "images/opts/sat_09_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "-78.5°",
            "images": [
              "images/opts/sat_09_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "101.5°",
            "images": [
              "images/opts/sat_09_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "Longitud oeste es negativa: -78.5°.",
        "explanation_images": []
      },
      {
        "id": "SAT-10",
        "num": 10,
        "text": "¿Qué sistema de referencia se mueve con la rotación de la Tierra?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "ECI",
            "images": [
              "images/opts/sat_10_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "ENU",
            "images": [
              "images/opts/sat_10_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "ECEF",
            "images": [
              "images/opts/sat_10_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Órbita perifocal",
            "images": [
              "images/opts/sat_10_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "ECEF rota con la Tierra.",
        "explanation_images": []
      }
    ]
  },
  {
    "id": "electronica_de_alta_frecuencia",
    "title": "Electrónica de alta frecuencia",
    "script": "repaso_electronica_de_alta_frecuencia.py",
    "questions": [
      {
        "id": "EHF-01",
        "num": 1,
        "text": "¿Cuál de los siguientes divisores permite aislamiento entre las salidas, sin pérdidas y con todos los puertos acoplados?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Divisor resistivo",
            "images": [
              "images/opts/ehf_01_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Divisor T sin pérdidas",
            "images": [
              "images/opts/ehf_01_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Divisor Wilkinson",
            "images": [
              "images/opts/ehf_01_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Divisor híbrido de ferrita",
            "images": [
              "images/opts/ehf_01_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "El divisor Wilkinson permite dividir potencia con adaptación en los puertos y aislamiento entre las salidas. En condiciones ideales, no disipa potencia cuando las salidas están adaptadas.",
        "explanation_images": []
      },
      {
        "id": "EHF-02",
        "num": 2,
        "text": "¿Qué tipo de filtro proporciona una respuesta con igual rizado en banda de paso y banda de parada?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Butterworth",
            "images": [
              "images/opts/ehf_02_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Elíptico",
            "images": [
              "images/opts/ehf_02_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Chebyshev tipo I",
            "images": [
              "images/opts/ehf_02_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Pasa banda m-derived",
            "images": [
              "images/opts/ehf_02_D.png"
            ]
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "El filtro elíptico, también llamado Cauer, presenta rizado tanto en la banda de paso como en la banda de rechazo. Por eso se identifica como la opción correcta.",
        "explanation_images": []
      },
      {
        "id": "EHF-03",
        "num": 3,
        "text": "¿Qué fenómeno se genera cuando una onda linealmente polarizada se propaga en un material de ferrita alineado con el campo magnético externo?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Interferencia constructiva",
            "images": [
              "images/opts/ehf_03_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Atenuación de fase",
            "images": [
              "images/opts/ehf_03_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Birefringencia ortogonal",
            "images": [
              "images/opts/ehf_03_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Rotación de Faraday",
            "images": [
              "images/opts/ehf_03_D.png"
            ]
          }
        ],
        "answers": [
          "D"
        ],
        "multi": false,
        "explanation": "En una ferrita polarizada por un campo magnético externo aparece rotación de Faraday: el plano de polarización de la onda gira al propagarse por el material.",
        "explanation_images": []
      },
      {
        "id": "EHF-04",
        "num": 4,
        "text": "¿Qué condición se debe cumplir para que un amplificador sea incondicionalmente estable?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "K > 1 y |Δ| > 1",
            "images": [
              "images/opts/ehf_04_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "K < 1 y |Δ| > 1",
            "images": [
              "images/opts/ehf_04_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "K > 1 y |Δ| < 1",
            "images": [
              "images/opts/ehf_04_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "K = 1 y |Δ| = 1",
            "images": [
              "images/opts/ehf_04_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "Para que un amplificador sea incondicionalmente estable se cumple el criterio de Rollett: K > 1 y |Δ| < 1.",
        "explanation_images": []
      },
      {
        "id": "EHF-05",
        "num": 5,
        "text": "¿Qué método de diseño de filtros permite mayor control sobre parámetros como rizado, pendiente de corte y fase?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Pérdidas de inserción",
            "images": [
              "images/opts/ehf_05_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Parámetros imagen",
            "images": [
              "images/opts/ehf_05_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Transformaciones de Richards",
            "images": [
              "images/opts/ehf_05_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Identidades de Kuroda",
            "images": [
              "images/opts/ehf_05_D.png"
            ]
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "El método de pérdidas de inserción permite diseñar filtros con mayor control sobre rizado, pendiente de corte y comportamiento de fase.",
        "explanation_images": []
      },
      {
        "id": "EHF-06",
        "num": 6,
        "text": "¿Cuál es la principal característica del divisor resistivo respecto a las pérdidas?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "No presenta pérdidas",
            "images": [
              "images/opts/ehf_06_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Tiene pérdidas por disipación",
            "images": [
              "images/opts/ehf_06_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Pérdidas solo por reflexión",
            "images": [
              "images/opts/ehf_06_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Genera ganancia de potencia",
            "images": [
              "images/opts/ehf_06_D.png"
            ]
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "El divisor resistivo divide la señal usando resistencias, por lo que parte de la potencia se disipa en forma de calor. Por eso tiene pérdidas por disipación.",
        "explanation_images": []
      },
      {
        "id": "EHF-07",
        "num": 7,
        "text": "¿Qué dispositivo permite la transmisión de señal en una única dirección entre dos puertos y absorbe las reflexiones?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Circulador",
            "images": [
              "images/opts/ehf_07_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Elevador de fase",
            "images": [
              "images/opts/ehf_07_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Filtro m-derived",
            "images": [
              "images/opts/ehf_07_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Aislador de ferrita",
            "images": [
              "images/opts/ehf_07_D.png"
            ]
          }
        ],
        "answers": [
          "D"
        ],
        "multi": false,
        "explanation": "El aislador de ferrita permite el paso de la señal en una dirección y absorbe la energía reflejada en la dirección contraria.",
        "explanation_images": []
      },
      {
        "id": "EHF-08",
        "num": 8,
        "text": "¿Qué tipo de transistor presenta mejor rendimiento en altas frecuencias por su elevada movilidad electrónica?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "BJT de silicio",
            "images": [
              "images/opts/ehf_08_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "JFET",
            "images": [
              "images/opts/ehf_08_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "MESFET de AsGa",
            "images": [
              "images/opts/ehf_08_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Varactor",
            "images": [
              "images/opts/ehf_08_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "El MESFET de arseniuro de galio, AsGa, ofrece buena movilidad electrónica, por eso se usa en aplicaciones de alta frecuencia.",
        "explanation_images": []
      },
      {
        "id": "EHF-09",
        "num": 9,
        "text": "¿Qué transformación permite implementar filtros LC con stubs abiertos o cortocircuitados en tecnología de líneas de transmisión?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Transformación de Brillouin",
            "images": [
              "images/opts/ehf_09_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Transformación de Richards",
            "images": [
              "images/opts/ehf_09_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Transformación binomial",
            "images": [
              "images/opts/ehf_09_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Transformación de Landé",
            "images": [
              "images/opts/ehf_09_D.png"
            ]
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "La transformación de Richards permite convertir elementos concentrados LC en stubs abiertos o cortocircuitados de líneas de transmisión.",
        "explanation_images": []
      },
      {
        "id": "EHF-10",
        "num": 10,
        "text": "¿Cuál es la principal razón para usar topologías balanceadas en amplificadores de microondas?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Aumentar la eficiencia energética",
            "images": [
              "images/opts/ehf_10_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Reducir el número de componentes activos",
            "images": [
              "images/opts/ehf_10_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Absorber reflexiones y facilitar el diseño en banda ancha",
            "images": [
              "images/opts/ehf_10_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Eliminar el uso de hibridadores",
            "images": [
              "images/opts/ehf_10_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "Las topologías balanceadas ayudan a absorber reflexiones y facilitan el diseño de amplificadores de microondas con mayor ancho de banda.",
        "explanation_images": []
      }
    ]
  },
  {
    "id": "electronica_i",
    "title": "Electrónica I",
    "script": "repaso_electronica_i.py",
    "questions": [
      {
        "id": "EI-01",
        "num": 1,
        "text": "En un material semiconductor, el orbital de valencia se satura cuando contiene:",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "1 electrón",
            "images": [
              "images/opts/ei_01_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Los mismos iones (+) y (-)",
            "images": [
              "images/opts/ei_01_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "4 electrones",
            "images": [
              "images/opts/ei_01_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "8 electrones",
            "images": [
              "images/opts/ei_01_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "El orbital de valencia de un semiconductor típico se completa con 4 electrones de valencia, lo que permite formar enlaces covalentes.",
        "explanation_images": []
      },
      {
        "id": "EI-02",
        "num": 2,
        "text": "Suponiendo que un semiconductor intrínseco tiene 1000 millones de electrones libres a temperatura ambiente, si la temperatura disminuye a 0 °C, ¿cuántos huecos tendrá?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Menos de 1000 millones",
            "images": [
              "images/opts/ei_02_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "1000 millones",
            "images": [
              "images/opts/ei_02_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Más de 1000 millones",
            "images": [
              "images/opts/ei_02_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Imposible decirlo",
            "images": [
              "images/opts/ei_02_D.png"
            ]
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "Al disminuir la temperatura, se reduce la generación térmica de pares electrón-hueco. Por eso habrá menos huecos que a temperatura ambiente.",
        "explanation_images": []
      },
      {
        "id": "EI-03",
        "num": 3,
        "text": "¿Cuál es la tensión de pico en la carga en un rectificador de onda completa si la tensión del secundario es de 20 V eficaces?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "0 V",
            "images": [
              "images/opts/ei_03_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "0,7 V",
            "images": [
              "images/opts/ei_03_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "14,1 V",
            "images": [
              "images/opts/ei_03_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "28,3 V",
            "images": [
              "images/opts/ei_03_D.png"
            ]
          }
        ],
        "answers": [
          "D"
        ],
        "multi": false,
        "explanation": "La tensión pico se calcula con Vp = Vrms√2. Entonces Vp = 20√2 ≈ 28,3 V.",
        "explanation_images": []
      },
      {
        "id": "EI-04",
        "num": 4,
        "text": "Si la capacidad del filtro aumenta, el rizado:",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Disminuirá",
            "images": [
              "images/opts/ei_04_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "No variará",
            "images": [
              "images/opts/ei_04_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Aumentará",
            "images": [
              "images/opts/ei_04_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Ninguna de las anteriores",
            "images": [
              "images/opts/ei_04_D.png"
            ]
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "Al aumentar la capacitancia del filtro, el capacitor se descarga más lentamente entre semiciclos y el rizado disminuye.",
        "explanation_images": []
      },
      {
        "id": "EI-05",
        "num": 5,
        "text": "La beta de un transistor es la relación de:",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "La corriente de colector respecto de la corriente de emisor",
            "images": [
              "images/opts/ei_05_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "La corriente de colector respecto de la corriente de base",
            "images": [
              "images/opts/ei_05_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "La corriente de base respecto de la corriente de colector",
            "images": [
              "images/opts/ei_05_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "La corriente de emisor respecto de la corriente de colector",
            "images": [
              "images/opts/ei_05_D.png"
            ]
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "La beta del transistor se define como β = IC / IB, es decir, corriente de colector dividida para corriente de base.",
        "explanation_images": []
      },
      {
        "id": "EI-06",
        "num": 6,
        "text": "Si la ganancia de corriente es 100 y la corriente de colector es 10 mA, la corriente de base es:",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "10 μA",
            "images": [
              "images/opts/ei_06_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "100 μA",
            "images": [
              "images/opts/ei_06_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "1 A",
            "images": [
              "images/opts/ei_06_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "10 A",
            "images": [
              "images/opts/ei_06_D.png"
            ]
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "Usando β = IC / IB, entonces IB = IC / β = 10 mA / 100 = 0,1 mA = 100 μA.",
        "explanation_images": []
      },
      {
        "id": "EI-07",
        "num": 7,
        "text": "Si la ganancia de corriente es desconocida en un circuito con polarización de emisor, no se puede calcular:",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "La tensión de emisor",
            "images": [
              "images/opts/ei_07_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "La corriente de emisor",
            "images": [
              "images/opts/ei_07_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "La corriente de colector",
            "images": [
              "images/opts/ei_07_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "La corriente de base",
            "images": [
              "images/opts/ei_07_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "En este planteamiento, si no se conoce la ganancia de corriente, no se puede determinar directamente la corriente de colector.",
        "explanation_images": []
      },
      {
        "id": "EI-08",
        "num": 8,
        "text": "En un circuito de polarización de emisor con dos alimentaciones, la tensión de base es aproximadamente cero cuando:",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "La resistencia de base es muy grande",
            "images": [
              "images/opts/ei_08_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "El transistor se satura",
            "images": [
              "images/opts/ei_08_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "βdc es muy pequeña",
            "images": [
              "images/opts/ei_08_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "RB < 0,01 βdc RE",
            "images": [
              "images/opts/ei_08_D.png"
            ]
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "Según la respuesta marcada en el material, la tensión de base se aproxima a cero cuando el transistor se satura.",
        "explanation_images": []
      },
      {
        "id": "EI-09",
        "num": 9,
        "text": "La tensión en la resistencia de carga de un amplificador en emisor común con condensador de acoplo es:",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Continua y alterna",
            "images": [
              "images/opts/ei_09_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Continua y alterna",
            "images": [
              "images/opts/ei_09_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Sólo alterna",
            "images": [
              "images/opts/ei_09_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Ni continua ni alterna",
            "images": [
              "images/opts/ei_09_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "El condensador de acoplo bloquea la componente continua y deja pasar la señal alterna. Por eso en la carga aparece sólo alterna.",
        "explanation_images": []
      },
      {
        "id": "EI-10",
        "num": 10,
        "text": "Para la red de la figura, calcule Av.",
        "images": [
          "images/questions/elec_i_q10.png"
        ],
        "options": [
          {
            "letter": "A",
            "text": "Av = 0.997",
            "images": [
              "images/opts/ei_10_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Av = -1",
            "images": [
              "images/opts/ei_10_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Av = 1",
            "images": [
              "images/opts/ei_10_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Av = -0.997",
            "images": [
              "images/opts/ei_10_D.png"
            ]
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "Para la red mostrada, el análisis de pequeña señal conduce a una ganancia cercana a la unidad: Av ≈ 0,997. Por eso la opción correcta es A.",
        "explanation_images": [
          "images/solutions/ei_10_resolucion.png"
        ]
      }
    ]
  },
  {
    "id": "electronica_ii",
    "title": "Electrónica II",
    "script": "repaso_electronica_ii.py",
    "questions": [
      {
        "id": "EII-01",
        "num": 1,
        "text": "¿Qué es una aplicación no lineal de BJT?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Transistor en modo on-off.",
            "images": [
              "images/opts/eii_01_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Transistor como amplificador lineal.",
            "images": [
              "images/opts/eii_01_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Transistor como amplificador no lineal.",
            "images": [
              "images/opts/eii_01_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Transistor en saturación.",
            "images": [
              "images/opts/eii_01_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "La aplicación no lineal del BJT ocurre cuando el transistor no trabaja como amplificador lineal, sino en una zona de conmutación o comportamiento no lineal. Según la clave del material, la respuesta correcta es “Transistor como amplificador no lineal”.",
        "explanation_images": []
      },
      {
        "id": "EII-02",
        "num": 2,
        "text": "¿Qué diferencia a un amplificador de potencia clase AB de un amplificador de potencia clase A?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Mayor eficiencia con distorsión.",
            "images": [
              "images/opts/eii_02_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Menor eficiencia y distorsión.",
            "images": [
              "images/opts/eii_02_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Posee un solo transistor.",
            "images": [
              "images/opts/eii_02_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Es un amplificador lineal.",
            "images": [
              "images/opts/eii_02_D.png"
            ]
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "Un amplificador clase AB mejora la eficiencia respecto al clase A, aunque puede introducir cierta distorsión de cruce si no está correctamente polarizado.",
        "explanation_images": []
      },
      {
        "id": "EII-03",
        "num": 3,
        "text": "¿Qué característica cumplen los OPAMP respecto a su impedancia de entrada, impedancia de salida y ancho de banda?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Impedancia de entrada alta, impedancia de salida baja, ancho de banda aumenta.",
            "images": [
              "images/opts/eii_03_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Impedancia de entrada baja, impedancia de salida alta, ancho de banda aumenta.",
            "images": [
              "images/opts/eii_03_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Impedancia de entrada baja, impedancia de salida baja, ancho de banda aumenta.",
            "images": [
              "images/opts/eii_03_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Impedancia de entrada alta, impedancia de salida alta, ancho de banda aumenta.",
            "images": [
              "images/opts/eii_03_D.png"
            ]
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "En el modelo práctico de un amplificador operacional se busca alta impedancia de entrada, baja impedancia de salida y buen ancho de banda.",
        "explanation_images": []
      },
      {
        "id": "EII-04",
        "num": 4,
        "text": "¿Cómo se llama la corriente mínima de entrada al gate para activar un SCR o TRIAC?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Corriente de enganche.",
            "images": [
              "images/opts/eii_04_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Corriente de mantenimiento.",
            "images": [
              "images/opts/eii_04_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Corriente de polarización.",
            "images": [
              "images/opts/eii_04_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Corriente inversa.",
            "images": [
              "images/opts/eii_04_D.png"
            ]
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "Según la clave del material, la corriente mínima asociada al disparo del dispositivo se identifica como corriente de enganche.",
        "explanation_images": []
      },
      {
        "id": "EII-05",
        "num": 5,
        "text": "¿Cuál es el principio teórico para el funcionamiento de los dispositivos electrónicos ópticos?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Efecto fotoeléctrico.",
            "images": [
              "images/opts/eii_05_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Efecto electromagnético.",
            "images": [
              "images/opts/eii_05_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Teoría de la luz.",
            "images": [
              "images/opts/eii_05_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Efecto óptico.",
            "images": [
              "images/opts/eii_05_D.png"
            ]
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "Los dispositivos optoelectrónicos se basan en la interacción entre luz y material semiconductor; por eso el principio señalado en la clave es el efecto fotoeléctrico.",
        "explanation_images": []
      },
      {
        "id": "EII-06",
        "num": 6,
        "text": "¿Cuál es la función principal de un amplificador operacional no realimentado en un circuito?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "El amplificador operacional amplifica la diferencia de voltaje entre sus dos entradas.",
            "images": [
              "images/opts/eii_06_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "El amplificador operacional da una ganancia lineal al circuito.",
            "images": [
              "images/opts/eii_06_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "El amplificador operacional filtra las señales no deseadas.",
            "images": [
              "images/opts/eii_06_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "El amplificador operacional realiza operaciones con el voltaje de sus dos entradas.",
            "images": [
              "images/opts/eii_06_D.png"
            ]
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "Sin realimentación, el OPAMP amplifica directamente la diferencia de voltaje entre la entrada no inversora y la entrada inversora.",
        "explanation_images": []
      },
      {
        "id": "EII-07",
        "num": 7,
        "text": "¿Qué diferencia principal existe entre un filtro pasivo y un filtro activo?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Un filtro pasivo no utiliza componentes activos; usa resistencias, capacitores e inductores, mientras que un filtro activo incluye amplificadores.",
            "images": [
              "images/opts/eii_07_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Un filtro pasivo utiliza componentes activos, mientras que un filtro activo no incluye amplificador.",
            "images": [
              "images/opts/eii_07_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Se diferencia en los valores de los condensadores.",
            "images": [
              "images/opts/eii_07_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Un filtro pasivo utiliza componentes activos y un filtro activo incluye bobinas.",
            "images": [
              "images/opts/eii_07_D.png"
            ]
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "Un filtro pasivo trabaja con componentes pasivos como resistencias, capacitores e inductores. Un filtro activo incorpora elementos activos, normalmente amplificadores operacionales.",
        "explanation_images": []
      },
      {
        "id": "EII-08",
        "num": 8,
        "text": "¿Cuál es la función de un optoacoplador?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Aislar etapas de cortocircuitos.",
            "images": [
              "images/opts/eii_08_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Acoplar señales analógicas.",
            "images": [
              "images/opts/eii_08_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Acoplar señales digitales.",
            "images": [
              "images/opts/eii_08_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Aislar señales de cortocircuitos.",
            "images": [
              "images/opts/eii_08_D.png"
            ]
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "Según la clave del material, la función indicada es aislar etapas de cortocircuitos. En general, un optoacoplador permite aislamiento eléctrico entre etapas mediante luz.",
        "explanation_images": []
      },
      {
        "id": "EII-09",
        "num": 9,
        "text": "¿Cuál es la diferencia entre un diodo Shockley y un diodo rectificador de uso general?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "El voltaje de ruptura: 30 V y 0,6 V, respectivamente.",
            "images": [
              "images/opts/eii_09_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "El diodo Shockley se polariza inversamente.",
            "images": [
              "images/opts/eii_09_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "El diodo rectificador se activa a menos de 30 V.",
            "images": [
              "images/opts/eii_09_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "El voltaje de ruptura: 0,6 V y 30 V, respectivamente.",
            "images": [
              "images/opts/eii_09_D.png"
            ]
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "De acuerdo con la clave del material, la diferencia se expresa por sus voltajes característicos: 30 V para el Shockley y 0,6 V para el rectificador, respectivamente.",
        "explanation_images": []
      },
      {
        "id": "EII-10",
        "num": 10,
        "text": "¿Qué es la frecuencia de corte en un filtro activo?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Valor de la frecuencia a partir del cual se atenúa la señal.",
            "images": [
              "images/opts/eii_10_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Valor de la frecuencia a partir de la cual se gana 3 dB.",
            "images": [
              "images/opts/eii_10_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Valor de la frecuencia a partir del cual la ganancia se atenúa.",
            "images": [
              "images/opts/eii_10_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Valor de la ganancia a partir del cual se atenúa la frecuencia.",
            "images": [
              "images/opts/eii_10_D.png"
            ]
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "La frecuencia de corte marca el punto desde el cual la señal empieza a atenuarse de forma significativa en el filtro.",
        "explanation_images": []
      }
    ]
  },
  {
    "id": "iot",
    "title": "IoT",
    "script": "repaso_iot.py",
    "questions": [
      {
        "id": "IOT-01",
        "num": 1,
        "text": "¿Cuál de las siguientes opciones es la clase de LoRaWAN que más consume potencia?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Clase 1",
            "images": [
              "images/opts/iot_01_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Clase 2",
            "images": [
              "images/opts/iot_01_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Clase 3",
            "images": [
              "images/opts/iot_01_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Ninguna de las opciones",
            "images": [
              "images/opts/iot_01_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "En LoRaWAN, la clase que más consume potencia es la Clase C, porque mantiene la recepción abierta casi todo el tiempo. Por eso, dentro de las opciones, corresponde a Clase 3.",
        "explanation_images": []
      },
      {
        "id": "IOT-02",
        "num": 2,
        "text": "¿Cuál de las siguientes opciones permite una mayor transmisión de datos?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "SF11",
            "images": [
              "images/opts/iot_02_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "SF10",
            "images": [
              "images/opts/iot_02_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "SF8",
            "images": [
              "images/opts/iot_02_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Ninguna de las opciones",
            "images": [
              "images/opts/iot_02_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "En LoRa, un factor de dispersión más bajo permite mayor velocidad de transmisión, aunque reduce el alcance. Entre SF11, SF10 y SF8, el que permite mayor transmisión de datos es SF8.",
        "explanation_images": []
      },
      {
        "id": "IOT-03",
        "num": 3,
        "text": "¿Cuál de los siguientes factores de LoRaWAN permite un mayor rango de cobertura?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "SF14",
            "images": [
              "images/opts/iot_03_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "SF12",
            "images": [
              "images/opts/iot_03_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "SF10",
            "images": [
              "images/opts/iot_03_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Ninguna de las opciones",
            "images": [
              "images/opts/iot_03_D.png"
            ]
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "En LoRaWAN, un factor de dispersión más alto mejora la sensibilidad y aumenta el alcance. En LoRaWAN los valores usuales llegan hasta SF12, por eso la opción correcta es SF12.",
        "explanation_images": []
      },
      {
        "id": "IOT-04",
        "num": 4,
        "text": "La tecnología WiFi HaLow está definida bajo el estándar:",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "802.11b/g/n",
            "images": [
              "images/opts/iot_04_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "802.11ah",
            "images": [
              "images/opts/iot_04_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "802.11af",
            "images": [
              "images/opts/iot_04_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "802.11be",
            "images": [
              "images/opts/iot_04_D.png"
            ]
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "WiFi HaLow corresponde al estándar IEEE 802.11ah, diseñado para comunicaciones de largo alcance y bajo consumo en aplicaciones IoT.",
        "explanation_images": []
      },
      {
        "id": "IOT-05",
        "num": 5,
        "text": "Los sistemas IoT básicamente se componen de:",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Sistemas pervasivos y sistemas embebidos",
            "images": [
              "images/opts/iot_05_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Computación embebida y ordenadores de uso general",
            "images": [
              "images/opts/iot_05_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Sensores y sistemas permisivos",
            "images": [
              "images/opts/iot_05_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Ninguna de las opciones",
            "images": [
              "images/opts/iot_05_D.png"
            ]
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "Los sistemas IoT combinan computación embebida con presencia distribuida o pervasiva. Por eso, la mejor opción es sistemas pervasivos y sistemas embebidos.",
        "explanation_images": []
      },
      {
        "id": "IOT-06",
        "num": 6,
        "text": "La arquitectura que permite abarcar la lógica de aplicaciones en servicios es:",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "SOA",
            "images": [
              "images/opts/iot_06_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Basado en API",
            "images": [
              "images/opts/iot_06_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "SOA y API",
            "images": [
              "images/opts/iot_06_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Ninguna de las opciones",
            "images": [
              "images/opts/iot_06_D.png"
            ]
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "SOA significa Arquitectura Orientada a Servicios. Su idea central es organizar la lógica de la aplicación en servicios reutilizables.",
        "explanation_images": []
      },
      {
        "id": "IOT-07",
        "num": 7,
        "text": "¿Cuál es la generación web que generalmente se describe como un conjunto de aplicaciones de rápido crecimiento, que permite usar el entorno y compartir experiencias sociales?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Web 1.0",
            "images": [
              "images/opts/iot_07_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Web 2.0",
            "images": [
              "images/opts/iot_07_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Web 3.0",
            "images": [
              "images/opts/iot_07_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Web 4.0",
            "images": [
              "images/opts/iot_07_D.png"
            ]
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "La Web 2.0 se caracteriza por la interacción social, la colaboración, el contenido generado por usuarios y el intercambio de experiencias.",
        "explanation_images": []
      },
      {
        "id": "IOT-08",
        "num": 8,
        "text": "¿Cuál de las siguientes opciones corresponde a una característica de la revolución industrial 4.0?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Permite la producción en cadena que mantiene una calidad estándar de los productos y servicios.",
            "images": [
              "images/opts/iot_08_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Su fuente de energía es el vapor",
            "images": [
              "images/opts/iot_08_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Reemplazar los trabajos manuales usando máquinas",
            "images": [
              "images/opts/iot_08_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Ninguna de las anteriores",
            "images": [
              "images/opts/iot_08_D.png"
            ]
          }
        ],
        "answers": [
          "D"
        ],
        "multi": false,
        "explanation": "La Industria 4.0 se asocia con automatización avanzada, IoT, sistemas ciberfísicos y análisis de datos. Las opciones A, B y C corresponden a revoluciones industriales anteriores, por eso la correcta es ninguna de las anteriores.",
        "explanation_images": []
      },
      {
        "id": "IOT-09",
        "num": 9,
        "text": "¿Cuál de los siguientes protocolos de comunicación sería la opción más lógica para implementar un dashboard en navegadores con comunicación full-duplex?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "HTTP",
            "images": [
              "images/opts/iot_09_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "WebSocket",
            "images": [
              "images/opts/iot_09_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "MQTT",
            "images": [
              "images/opts/iot_09_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Todas las opciones",
            "images": [
              "images/opts/iot_09_D.png"
            ]
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "WebSocket permite comunicación full-duplex entre navegador y servidor usando una conexión persistente, ideal para dashboards en tiempo real.",
        "explanation_images": []
      },
      {
        "id": "IOT-10",
        "num": 10,
        "text": "¿Cuál de las siguientes REST constraints indica que el conocimiento y entendimiento obtenido de un componente de la API debería ser generalmente aplicable en cualquier instancia de la API?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Client-server",
            "images": [
              "images/opts/iot_10_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Stateless",
            "images": [
              "images/opts/iot_10_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Uniform interface",
            "images": [
              "images/opts/iot_10_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Ninguna de las opciones",
            "images": [
              "images/opts/iot_10_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "La restricción Uniform Interface busca una interfaz uniforme. Esto permite que el conocimiento de cómo interactuar con un componente de la API sea aplicable de manera general en otras partes de la API.",
        "explanation_images": []
      }
    ]
  },
  {
    "id": "lenguajes_de_programacion",
    "title": "Lenguajes de Programación",
    "script": "repaso_lenguajes_de_programacion.py",
    "questions": [
      {
        "id": "LP-01",
        "num": 1,
        "text": "¿Qué elemento representa un modelo visual de relaciones entre clases en Programación Orientada a Objetos (POO)?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Diagrama ER",
            "images": [
              "images/opts/lp_01_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Diagrama UML",
            "images": [
              "images/opts/lp_01_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Lenguaje SQL",
            "images": [
              "images/opts/lp_01_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Programación jerárquica",
            "images": [
              "images/opts/lp_01_D.png"
            ]
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "En POO, el diagrama UML permite representar visualmente clases, atributos, métodos y relaciones entre objetos. Por eso la respuesta correcta es Diagrama UML.",
        "explanation_images": []
      },
      {
        "id": "LP-02",
        "num": 2,
        "text": "¿Cuál de las siguientes opciones reúne correctamente las características principales de la Programación Orientada a Objetos (POO)?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Encapsulamiento, Clase, Objetos, Métodos",
            "images": [
              "images/opts/lp_02_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Herencia, Polimorfismo, Instanciar, Objeto",
            "images": [
              "images/opts/lp_02_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Encapsulamiento, Herencia, Polimorfismo",
            "images": [
              "images/opts/lp_02_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Encapsulamiento, Herencia, Polimorfismo, Abstracción",
            "images": [
              "images/opts/lp_02_D.png"
            ]
          }
        ],
        "answers": [
          "D"
        ],
        "multi": false,
        "explanation": "Las características principales de la POO son encapsulamiento, herencia, polimorfismo y abstracción. Por eso la opción más completa es la D.",
        "explanation_images": []
      },
      {
        "id": "LP-03",
        "num": 3,
        "text": "El polimorfismo permite que:",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Un método cambie de nombre en tiempo de ejecución",
            "images": [
              "images/opts/lp_03_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Una función tenga diferentes comportamientos según el objeto",
            "images": [
              "images/opts/lp_03_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Una variable se modifique sin permiso",
            "images": [
              "images/opts/lp_03_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Un atributo sea constante",
            "images": [
              "images/opts/lp_03_D.png"
            ]
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "El polimorfismo permite que una misma operación o función se comporte de distintas formas dependiendo del objeto que la utilice.",
        "explanation_images": []
      },
      {
        "id": "LP-04",
        "num": 4,
        "text": "¿Qué estructura de control se usa para decidir entre múltiples opciones en Java?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "if",
            "images": [
              "images/opts/lp_04_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "while",
            "images": [
              "images/opts/lp_04_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "do-while",
            "images": [
              "images/opts/lp_04_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "switch",
            "images": [
              "images/opts/lp_04_D.png"
            ]
          }
        ],
        "answers": [
          "D"
        ],
        "multi": false,
        "explanation": "En Java, la estructura switch se usa para seleccionar entre varias alternativas posibles según el valor de una expresión.",
        "explanation_images": []
      },
      {
        "id": "LP-05",
        "num": 5,
        "text": "¿Qué implica la sobreescritura de métodos (@Override) en Java?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Crear múltiples métodos con el mismo nombre",
            "images": [
              "images/opts/lp_05_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Usar un método estático en distintas clases",
            "images": [
              "images/opts/lp_05_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Definir un método en una subclase con el mismo nombre y parámetros",
            "images": [
              "images/opts/lp_05_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Aplicar el mismo método en varios paquetes",
            "images": [
              "images/opts/lp_05_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "La sobreescritura ocurre cuando una subclase redefine un método heredado usando el mismo nombre y parámetros para darle un comportamiento propio.",
        "explanation_images": []
      },
      {
        "id": "LP-06",
        "num": 6,
        "text": "Completa el siguiente código en Java para sobrescribir un método de la superclase:",
        "images": [
          "images/questions/lp_06_codigo.png"
        ],
        "options": [
          {
            "letter": "A",
            "text": "Super",
            "images": [
              "images/opts/lp_06_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "extends",
            "images": [
              "images/opts/lp_06_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "package",
            "images": [
              "images/opts/lp_06_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "override",
            "images": [
              "images/opts/lp_06_D.png"
            ]
          }
        ],
        "answers": [
          "D"
        ],
        "multi": false,
        "explanation": "La anotación correcta es @Override. En Java se usa para indicar que un método de una subclase sobrescribe un método de su superclase.",
        "explanation_images": []
      },
      {
        "id": "LP-07",
        "num": 7,
        "text": "¿Cuál es la salida del siguiente código en Python?",
        "images": [
          "images/questions/lp_07_codigo.png"
        ],
        "options": [
          {
            "letter": "A",
            "text": "Hola, Mundo",
            "images": [
              "images/opts/lp_07_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Mundo",
            "images": [
              "images/opts/lp_07_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Hola mundo",
            "images": [
              "images/opts/lp_07_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Hola, mundo",
            "images": [
              "images/opts/lp_07_D.png"
            ]
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "La clase Derivada llama al método saludo() de Base mediante super(), obtiene \"Hola\" y luego concatena \", Mundo\". Por eso imprime Hola, Mundo.",
        "explanation_images": []
      },
      {
        "id": "LP-08",
        "num": 8,
        "text": "Completa el código en Python para lanzar un error cuando la edad sea negativa:",
        "images": [
          "images/questions/lp_08_codigo.png"
        ],
        "options": [
          {
            "letter": "A",
            "text": "raise",
            "images": [
              "images/opts/lp_08_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "return",
            "images": [
              "images/opts/lp_08_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "break",
            "images": [
              "images/opts/lp_08_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "except",
            "images": [
              "images/opts/lp_08_D.png"
            ]
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "En Python se usa raise para lanzar una excepción. Por eso el código correcto es: raise ValueError(\"Edad no válida\").",
        "explanation_images": []
      },
      {
        "id": "LP-09",
        "num": 9,
        "text": "Dado el siguiente código en Java, ¿qué imprime y por qué?",
        "images": [
          "images/questions/lp_09_codigo.png"
        ],
        "options": [
          {
            "letter": "A",
            "text": "2 1 1 0",
            "images": [
              "images/opts/lp_09_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "2 1 0 -1",
            "images": [
              "images/opts/lp_09_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "2 1",
            "images": [
              "images/opts/lp_09_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "2 1 0",
            "images": [
              "images/opts/lp_09_D.png"
            ]
          }
        ],
        "answers": [
          "D"
        ],
        "multi": false,
        "explanation": "La lista inicia con 3 elementos. El ciclo elimina desde el último índice hacia el primero. Después de cada eliminación los tamaños son 2, 1 y 0. Por eso imprime: 2 1 0.",
        "explanation_images": []
      },
      {
        "id": "LP-10",
        "num": 10,
        "text": "¿Por qué se utiliza super() en una subclase de Python?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Para evitar errores de ejecución",
            "images": [
              "images/opts/lp_10_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Para sobrescribir propiedades",
            "images": [
              "images/opts/lp_10_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Para acelerar el constructor",
            "images": [
              "images/opts/lp_10_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Para llamar métodos de la superclase",
            "images": [
              "images/opts/lp_10_D.png"
            ]
          }
        ],
        "answers": [
          "D"
        ],
        "multi": false,
        "explanation": "super() permite acceder a métodos y constructores de la clase padre desde una subclase. Por eso se usa para llamar métodos de la superclase.",
        "explanation_images": []
      }
    ]
  },
  {
    "id": "marco_regulatorio_de_las_telecomunicaciones",
    "title": "Marco Regulatorio de las Telecomunicaciones",
    "script": "repaso_marco_regulatorio_de_las_telecomunicaciones.py",
    "questions": [
      {
        "id": "MRT-01",
        "num": 1,
        "text": "¿Cuál de los siguientes factores justifica técnicamente que el espectro sea considerado recurso estratégico?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Su contribución directa al Producto Interno Bruto mediante impuestos",
            "images": [
              "images/opts/mrt_01_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Su impacto en la soberanía de las comunicaciones y su carácter limitado",
            "images": [
              "images/opts/mrt_01_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Su dependencia del cableado estructurado nacional",
            "images": [
              "images/opts/mrt_01_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Su relación directa con el contenido audiovisual transmitido",
            "images": [
              "images/opts/mrt_01_D.png"
            ]
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "El espectro radioeléctrico se considera un recurso estratégico porque es limitado y tiene impacto directo en la soberanía de las comunicaciones. Por eso la opción correcta es B.",
        "explanation_images": []
      },
      {
        "id": "MRT-02",
        "num": 2,
        "text": "¿Cuál de las siguientes afirmaciones describe con mayor precisión una interferencia nociva según la UIT?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Es toda emisión que afecta cualquier otro equipo receptor conectado a Internet",
            "images": [
              "images/opts/mrt_02_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Es una fluctuación espontánea de potencia en el espectro pasivo",
            "images": [
              "images/opts/mrt_02_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Es una perturbación temporal causada por condiciones atmosféricas locales",
            "images": [
              "images/opts/mrt_02_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Es toda señal no deseada que degrada, obstaculiza o interrumpe un servicio autorizado",
            "images": [
              "images/opts/mrt_02_D.png"
            ]
          }
        ],
        "answers": [
          "D"
        ],
        "multi": false,
        "explanation": "Una interferencia nociva es una señal no deseada que degrada, obstaculiza o interrumpe un servicio autorizado. Por eso la opción correcta es D.",
        "explanation_images": []
      },
      {
        "id": "MRT-03",
        "num": 3,
        "text": "¿Qué define técnicamente a una banda “no licenciada”?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "No requiere registro pero debe cumplir parámetros técnicos establecidos",
            "images": [
              "images/opts/mrt_03_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Está reservada para operadores que prestan servicios gratuitos",
            "images": [
              "images/opts/mrt_03_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Puede ser utilizada sin limitaciones por cualquier dispositivo",
            "images": [
              "images/opts/mrt_03_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Solo aplica a frecuencias superiores a 30 GHz",
            "images": [
              "images/opts/mrt_03_D.png"
            ]
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "Una banda no licenciada no exige una licencia individual para cada usuario, pero sí debe cumplir límites y parámetros técnicos establecidos. Por eso la opción correcta es A.",
        "explanation_images": []
      },
      {
        "id": "MRT-04",
        "num": 4,
        "text": "¿Qué función cumple el Plan Nacional de Frecuencias en la gestión del espectro en Ecuador?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Asignar frecuencias a organismos internacionales con presencia local",
            "images": [
              "images/opts/mrt_04_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Establecer protocolos de transmisión digital terrestre",
            "images": [
              "images/opts/mrt_04_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Regular el tráfico de paquetes IP en redes inalámbricas",
            "images": [
              "images/opts/mrt_04_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Distribuir las bandas disponibles según tipo de servicio, condiciones técnicas y legales",
            "images": [
              "images/opts/mrt_04_D.png"
            ]
          }
        ],
        "answers": [
          "D"
        ],
        "multi": false,
        "explanation": "El Plan Nacional de Frecuencias organiza y distribuye las bandas disponibles según el tipo de servicio y las condiciones técnicas y legales. Por eso la opción correcta es D.",
        "explanation_images": []
      },
      {
        "id": "MRT-05",
        "num": 5,
        "text": "¿Cuál es el principal objetivo de la Ley Orgánica de Telecomunicaciones en Ecuador?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Regular el uso del espectro radioeléctrico y garantizar el acceso a servicios de telecomunicaciones",
            "images": [
              "images/opts/mrt_05_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Limitar la competencia entre operadores de telecomunicaciones",
            "images": [
              "images/opts/mrt_05_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Permitir el uso privado del espectro sin regulaciones",
            "images": [
              "images/opts/mrt_05_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Otorgar licencias solo a empresas estatales",
            "images": [
              "images/opts/mrt_05_D.png"
            ]
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "La Ley Orgánica de Telecomunicaciones busca regular el uso del espectro radioeléctrico y garantizar el acceso a servicios de telecomunicaciones. Por eso la opción correcta es A.",
        "explanation_images": []
      },
      {
        "id": "MRT-06",
        "num": 6,
        "text": "¿Qué entidad es responsable de la regulación y control del sector de telecomunicaciones en Ecuador?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Ministerio de Energía y Recursos Naturales",
            "images": [
              "images/opts/mrt_06_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Agencia de Regulación y Control de las Telecomunicaciones",
            "images": [
              "images/opts/mrt_06_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Superintendencia de Bancos",
            "images": [
              "images/opts/mrt_06_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Asamblea Nacional",
            "images": [
              "images/opts/mrt_06_D.png"
            ]
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "La entidad responsable de la regulación y control del sector de telecomunicaciones en Ecuador es ARCOTEL. Por eso la opción correcta es B.",
        "explanation_images": []
      },
      {
        "id": "MRT-07",
        "num": 7,
        "text": "¿Cuál de las siguientes afirmaciones sobre el espectro radioeléctrico es correcta según la ley?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Es un recurso privado que se puede vender sin autorización del Estado",
            "images": [
              "images/opts/mrt_07_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Es un recurso estratégico del Estado y su uso está regulado por ARCOTEL",
            "images": [
              "images/opts/mrt_07_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "No es necesario obtener una concesión para operar en el espectro radioeléctrico",
            "images": [
              "images/opts/mrt_07_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Solo empresas extranjeras pueden hacer uso del espectro en Ecuador",
            "images": [
              "images/opts/mrt_07_D.png"
            ]
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "El espectro radioeléctrico es un recurso estratégico del Estado y su uso se encuentra regulado por ARCOTEL. Por eso la opción correcta es B.",
        "explanation_images": []
      },
      {
        "id": "MRT-08",
        "num": 8,
        "text": "¿Cuál es uno de los derechos principales de los usuarios de telecomunicaciones en Ecuador?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Acceder a servicios de telecomunicaciones sin regulación",
            "images": [
              "images/opts/mrt_08_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Recibir servicios de telecomunicaciones sin pagar tarifas",
            "images": [
              "images/opts/mrt_08_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Obtener servicios con calidad y continuidad, con derecho a la portabilidad numérica",
            "images": [
              "images/opts/mrt_08_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Restringir la competencia entre proveedores de telecomunicaciones",
            "images": [
              "images/opts/mrt_08_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "Uno de los derechos principales de los usuarios es recibir servicios con calidad y continuidad, además del derecho a la portabilidad numérica. Por eso la opción correcta es C.",
        "explanation_images": []
      },
      {
        "id": "MRT-09",
        "num": 9,
        "text": "¿Qué sanción puede aplicar ARCOTEL si una empresa de telecomunicaciones incumple con la normativa vigente?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Clausura inmediata sin previo aviso",
            "images": [
              "images/opts/mrt_09_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Multas, revocación de concesión o suspensión del servicio",
            "images": [
              "images/opts/mrt_09_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Prohibición total de operar en Ecuador",
            "images": [
              "images/opts/mrt_09_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "No hay sanciones establecidas en la ley",
            "images": [
              "images/opts/mrt_09_D.png"
            ]
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "Ante incumplimientos normativos, ARCOTEL puede aplicar sanciones como multas, revocación de concesión o suspensión del servicio. Por eso la opción correcta es B.",
        "explanation_images": []
      },
      {
        "id": "MRT-10",
        "num": 10,
        "text": "¿Cuál es el objetivo de la regulación de tarifas de telecomunicaciones en Ecuador?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Garantizar que las tarifas sean justas y equitativas para los usuarios",
            "images": [
              "images/opts/mrt_10_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Permitir que los operadores cobren cualquier tarifa sin regulaciones",
            "images": [
              "images/opts/mrt_10_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Eliminar la competencia en el mercado de telecomunicaciones",
            "images": [
              "images/opts/mrt_10_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Asegurar que solo las empresas estatales brinden servicios de telecomunicaciones",
            "images": [
              "images/opts/mrt_10_D.png"
            ]
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "La regulación de tarifas busca que los valores cobrados por los servicios sean justos y equitativos para los usuarios. Por eso la opción correcta es A.",
        "explanation_images": []
      }
    ]
  },
  {
    "id": "microcontroladores",
    "title": "Microcontroladores",
    "script": "repaso_microcontroladores.py",
    "questions": [
      {
        "id": "MC-01",
        "num": 1,
        "text": "¿Cuál es una de las principales diferencias entre un microcontrolador y un microprocesador?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Los microcontroladores tienen mayor potencia de cálculo que los microprocesadores.",
            "images": [
              "images/opts/micro_01_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Los microprocesadores integran sensores, mientras que los microcontroladores no.",
            "images": [
              "images/opts/micro_01_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Los microcontroladores están diseñados para controlar tareas específicas, mientras que los microprocesadores son de propósito general.",
            "images": [
              "images/opts/micro_01_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Los microprocesadores tienen menos capacidad de memoria integrada.",
            "images": [
              "images/opts/micro_01_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "La diferencia principal es que el microcontrolador integra recursos para controlar tareas específicas, mientras que el microprocesador es de propósito general. Por eso la opción correcta es C.",
        "explanation_images": []
      },
      {
        "id": "MC-02",
        "num": 2,
        "text": "El siguiente gráfico ilustra la forma de trabajo de la:",
        "images": [
          "images/questions/micro_02_figura.png"
        ],
        "options": [
          {
            "letter": "A",
            "text": "Técnica de Segmentación",
            "images": [
              "images/opts/micro_02_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Técnica de Búsqueda",
            "images": [
              "images/opts/micro_02_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Técnica de Ejecución",
            "images": [
              "images/opts/micro_02_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Técnica de Decodificación",
            "images": [
              "images/opts/micro_02_D.png"
            ]
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "El gráfico corresponde a la técnica de búsqueda, por lo que la opción correcta es B.",
        "explanation_images": []
      },
      {
        "id": "MC-03",
        "num": 3,
        "text": "Cuando nos referimos a que el formato de las instrucciones es ortogonal, significa que:",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Las instrucciones pueden manejar cualquier elemento de la arquitectura como fuente o como destino.",
            "images": [
              "images/opts/micro_03_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Todas las instrucciones de los microcontroladores tienen una longitud de 12 bits.",
            "images": [
              "images/opts/micro_03_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Todas las instrucciones de los microcontroladores tienen una longitud de 14 bits.",
            "images": [
              "images/opts/micro_03_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Las instrucciones siempre utilizan el banco de registros como operando fuente y el registro W como destino.",
            "images": [
              "images/opts/micro_03_D.png"
            ]
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "Una arquitectura o conjunto de instrucciones ortogonal permite usar los elementos de manera flexible como fuente o destino. Por eso la opción correcta es A.",
        "explanation_images": []
      },
      {
        "id": "MC-04",
        "num": 4,
        "text": "Una de las ventajas que presentan los microcontroladores es:",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "La necesidad de programación por máscaras en grandes series.",
            "images": [
              "images/opts/micro_04_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "El uso de herramientas que incrementan el tiempo y coste de diseño.",
            "images": [
              "images/opts/micro_04_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Las instrucciones tienen una longitud de palabra diferente de acuerdo con cada tipo.",
            "images": [
              "images/opts/micro_04_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "El alto grado de integración frente a otras opciones clásicas.",
            "images": [
              "images/opts/micro_04_D.png"
            ]
          }
        ],
        "answers": [
          "D"
        ],
        "multi": false,
        "explanation": "Una ventaja importante del microcontrolador es su alto grado de integración, ya que incluye CPU, memoria y periféricos en un solo circuito integrado. Por eso la opción correcta es D.",
        "explanation_images": []
      },
      {
        "id": "MC-05",
        "num": 5,
        "text": "En los microcontroladores PIC de gama media, el registro que tiene como funciones principales controlar las incidencias de la ALU, el estado de reset y la selección de bancos de memoria es el:",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Registro OPTION",
            "images": [
              "images/opts/micro_05_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Registro STATUS",
            "images": [
              "images/opts/micro_05_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Registro PCL",
            "images": [
              "images/opts/micro_05_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Registro WDT",
            "images": [
              "images/opts/micro_05_D.png"
            ]
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "El registro STATUS contiene banderas relacionadas con la ALU, estados de reset y bits para selección de bancos de memoria. Por eso la opción correcta es B.",
        "explanation_images": []
      },
      {
        "id": "MC-06",
        "num": 6,
        "text": "¿Qué operación se realiza al ejecutar la instrucción BTFSC PORTA,0?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Se escribe en el puerto A el valor de 0 en los 8 bits del registro.",
            "images": [
              "images/opts/micro_06_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Se explora el bit RA0 y se salta una instrucción si este bit es 0 lógico.",
            "images": [
              "images/opts/micro_06_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Se escribe sobre el bit RA0 el valor de 0 lógico.",
            "images": [
              "images/opts/micro_06_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Se lee el puerto A y se transfiere su contenido al registro W.",
            "images": [
              "images/opts/micro_06_D.png"
            ]
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "BTFSC significa Bit Test f, Skip if Clear. En PORTA,0 se evalúa el bit RA0 y se salta la siguiente instrucción si ese bit está en 0 lógico. Por eso la opción correcta es B.",
        "explanation_images": []
      },
      {
        "id": "MC-07",
        "num": 7,
        "text": "Determine la frecuencia de oscilación de un uC AVR que ejecuta su ciclo de instrucción en un tiempo de 2 µs.",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "2 MHz",
            "images": [
              "images/opts/micro_07_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "1 MHz",
            "images": [
              "images/opts/micro_07_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "4 MHz",
            "images": [
              "images/opts/micro_07_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "0.5 MHz",
            "images": [
              "images/opts/micro_07_D.png"
            ]
          }
        ],
        "answers": [
          "D"
        ],
        "multi": false,
        "explanation": "La frecuencia se obtiene como f = 1/T. Si T = 2 µs, entonces f = 1/(2×10⁻⁶) = 500 000 Hz = 0.5 MHz. Por eso la opción correcta es D.",
        "explanation_images": []
      },
      {
        "id": "MC-08",
        "num": 8,
        "text": "Para habilitar únicamente el canal analógico 0, tal como se representa en la figura, se debe asignar al registro ADCON1 el valor binario igual a:",
        "images": [
          "images/questions/micro_08_figura.png"
        ],
        "options": [
          {
            "letter": "A",
            "text": "00000111",
            "images": [
              "images/opts/micro_08_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "00001110",
            "images": [
              "images/opts/micro_08_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "00000000",
            "images": [
              "images/opts/micro_08_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "00000001",
            "images": [
              "images/opts/micro_08_D.png"
            ]
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "Según la opción marcada en el cuestionario, el valor binario asignado al registro ADCON1 es 00000111. Por eso la opción correcta es A.",
        "explanation_images": []
      },
      {
        "id": "MC-09",
        "num": 9,
        "text": "El siguiente esquema hardware muestra la conexión del microcontrolador con un teclado matricial y pantalla LCD. ¿Cómo están configuradas las líneas de los puertos?",
        "images": [
          "images/questions/micro_09_figura.png"
        ],
        "options": [
          {
            "letter": "A",
            "text": "C como salidas y B como entradas y salidas.",
            "images": [
              "images/opts/micro_09_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "B como entradas y C como entradas y salidas.",
            "images": [
              "images/opts/micro_09_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "C como entradas y B como entradas y salidas.",
            "images": [
              "images/opts/micro_09_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "B como salidas y C como entradas y salidas.",
            "images": [
              "images/opts/micro_09_D.png"
            ]
          }
        ],
        "answers": [
          "D"
        ],
        "multi": false,
        "explanation": "En el esquema indicado, la configuración correcta de los puertos es B como salidas y C como entradas y salidas. Por eso la opción correcta es D.",
        "explanation_images": []
      },
      {
        "id": "MC-10",
        "num": 10,
        "text": "Para direccionar una memoria de tamaño 65536 registros se requiere un contador de programa, registro PC, de:",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "12 bits",
            "images": [
              "images/opts/micro_10_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "16 bits",
            "images": [
              "images/opts/micro_10_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "20 bits",
            "images": [
              "images/opts/micro_10_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "8 bits",
            "images": [
              "images/opts/micro_10_D.png"
            ]
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "Como 65536 = 2¹⁶, se necesitan 16 bits para direccionar todos los registros. Por eso la opción correcta es B.",
        "explanation_images": []
      }
    ]
  },
  {
    "id": "procesamiento_digital_de_senales",
    "title": "Procesamiento Digital de Señales",
    "script": "repaso_procesamiento_digital_de_senales.py",
    "questions": [
      {
        "id": "PDS-01",
        "num": 1,
        "text": "¿Qué condición debe cumplir un sistema para ser invariante en el tiempo?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Su respuesta debe ser limitada en amplitud",
            "images": [
              "images/opts/pds_01_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Su entrada debe ser causal",
            "images": [
              "images/opts/pds_01_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Su respuesta no debe variar si la entrada se desplaza en el tiempo",
            "images": [
              "images/opts/pds_01_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Debe tener una fase lineal",
            "images": [
              "images/opts/pds_01_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "Un sistema invariante en el tiempo mantiene su comportamiento aunque la entrada se desplace en el tiempo. Por eso la opción correcta es C.",
        "explanation_images": []
      },
      {
        "id": "PDS-02",
        "num": 2,
        "text": "¿Qué condición mínima debe cumplir la frecuencia fs de muestreo para prevenir el aliasing?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "fs = fmax",
            "images": [
              "images/opts/pds_02_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "fs ≥ 2fmax",
            "images": [
              "images/opts/pds_02_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "fs ≥ fmax",
            "images": [
              "images/opts/pds_02_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "fs = 2fmax",
            "images": [
              "images/opts/pds_02_D.png"
            ]
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "Por el criterio de Nyquist, para evitar aliasing la frecuencia de muestreo debe ser al menos el doble de la frecuencia máxima de la señal: fs ≥ 2fmax. Por eso la opción correcta es B.",
        "explanation_images": []
      },
      {
        "id": "PDS-03",
        "num": 3,
        "text": "¿Por qué los filtros FIR son siempre estables?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Porque no usan realimentación",
            "images": [
              "images/opts/pds_03_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Dependen de la entrada y salida del filtro.",
            "images": [
              "images/opts/pds_03_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Porque todos sus polos están en el origen",
            "images": [
              "images/opts/pds_03_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Ambos filtros siempre son estables.",
            "images": [
              "images/opts/pds_03_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "En el cuestionario, la opción marcada como correcta indica que los filtros FIR son estables porque todos sus polos están en el origen. Por eso la opción correcta es C.",
        "explanation_images": []
      },
      {
        "id": "PDS-04",
        "num": 4,
        "text": "Se diseña un filtro IIR que tiene una función de transferencia con dos polos: uno en 0.5 y otro en 1.1. ¿El filtro IIR es estable el sistema?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Ambos tienen respuestas finitas.",
            "images": [
              "images/opts/pds_04_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Ambos dependen de la entrada y salida del filtro.",
            "images": [
              "images/opts/pds_04_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "FIR tiene respuesta al impulso finita e IIR infinita",
            "images": [
              "images/opts/pds_04_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Ambos filtros siempre son estables.",
            "images": [
              "images/opts/pds_04_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "Según la respuesta marcada en el cuestionario, la opción correcta es C. Además, se contrasta que FIR tiene respuesta al impulso finita e IIR respuesta al impulso infinita.",
        "explanation_images": []
      },
      {
        "id": "PDS-05",
        "num": 5,
        "text": "¿Cuál de las siguientes expresiones de la función de transferencia en DTFT representa un filtro ideal pasa banda? (ωc frecuencia de portadora)",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "H(e^{jω}) = rec(ω/(2ωc))",
            "images": [
              "images/opts/pds_05_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "H(e^{jω}) = rec((|ω| − ω0)/(2ωc))",
            "images": [
              "images/opts/pds_05_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "H(e^{jω}) = 1 − rec((|ω| − ω0)/(2ωc))",
            "images": [
              "images/opts/pds_05_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "H(e^{jω}) = 1 − rec(ω/(2ωc))",
            "images": [
              "images/opts/pds_05_D.png"
            ]
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "La opción marcada corresponde a un filtro ideal pasa banda centrado alrededor de ±ω0, expresado con la función rectangular. Por eso la opción correcta es B.",
        "explanation_images": []
      },
      {
        "id": "PDS-06",
        "num": 6,
        "text": "Dada la señal x[n] = {1, 0, −1, 0} para n = 0, 1, 2, 3. Calcula la DFTF X[k] para k = 0, 1, 2, 3 utilizando la fórmula:",
        "images": [
          "images/questions/pds_06_formula.png"
        ],
        "options": [
          {
            "letter": "A",
            "text": "X = {0, 2j, 0, −2j}",
            "images": [
              "images/opts/pds_06_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "X = {0, 0, 0, 0}",
            "images": [
              "images/opts/pds_06_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "X = {0, 2, 0, −2}",
            "images": [
              "images/opts/pds_06_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "X = {0, −2j, 0, 2j}",
            "images": [
              "images/opts/pds_06_D.png"
            ]
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "Según la opción marcada en el cuestionario, la DFTF resultante es X = {0, 2j, 0, −2j}. Por eso la opción correcta es A.",
        "explanation_images": []
      },
      {
        "id": "PDS-07",
        "num": 7,
        "text": "Considera un filtro FIR con ceros en z = 1, z = −1 y z = j. ¿Cuál es su implicación respecto a la estabilidad del filtro?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Es inestable por tener ceros en el borde del círculo",
            "images": [
              "images/opts/pds_07_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Es marginalmente estable",
            "images": [
              "images/opts/pds_07_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Es estable porque los ceros no afectan la estabilidad",
            "images": [
              "images/opts/pds_07_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Es inestable si hay ceros complejos",
            "images": [
              "images/opts/pds_07_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "La estabilidad del sistema depende de sus polos, no de sus ceros. Por eso la opción correcta es C.",
        "explanation_images": []
      },
      {
        "id": "PDS-08",
        "num": 8,
        "text": "¿Qué condición se debe cumplir para que un filtro IIR sea estable?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "El orden del filtro sea menor a 10",
            "images": [
              "images/opts/pds_08_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Todos sus ceros estén dentro del círculo unitario. Tenga fase lineal",
            "images": [
              "images/opts/pds_08_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Todos sus polos estén dentro del círculo unitario",
            "images": [
              "images/opts/pds_08_C.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "Un filtro IIR es estable cuando todos sus polos están dentro del círculo unitario. Por eso la opción correcta es C.",
        "explanation_images": []
      },
      {
        "id": "PDS-09",
        "num": 9,
        "text": "¿Qué describe el fenómeno de Gibbs en el contexto del procesamiento digital de señales?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "El incremento exponencial de la magnitud en la DFTF",
            "images": [
              "images/opts/pds_09_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "La pérdida de información en la cuantización de señales",
            "images": [
              "images/opts/pds_09_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Las oscilaciones persistentes cerca de la banda de transición en la función de transferencia del filtro.",
            "images": [
              "images/opts/pds_09_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "El aliasing que ocurre al submuestrear señales periódicas",
            "images": [
              "images/opts/pds_09_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "El fenómeno de Gibbs se manifiesta como oscilaciones persistentes cerca de discontinuidades o bandas de transición. Por eso la opción correcta es C.",
        "explanation_images": []
      },
      {
        "id": "PDS-10",
        "num": 10,
        "text": "Un filtro digital tiene la siguiente función de transferencia. Determina si el sistema es estable:",
        "images": [
          "images/questions/pds_10_funcion_transferencia.png"
        ],
        "options": [
          {
            "letter": "A",
            "text": "No, los ceros afectan la estabilidad",
            "images": [
              "images/opts/pds_10_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "No, tiene al menos un polo fuera del círculo unitario",
            "images": [
              "images/opts/pds_10_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Sí, todos los ceros están dentro del círculo unitario",
            "images": [
              "images/opts/pds_10_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "No, los ceros afectan la estabilidad",
            "images": [
              "images/opts/pds_10_D.png"
            ]
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "El sistema no es estable si tiene al menos un polo fuera del círculo unitario. Según la opción marcada en el cuestionario, la respuesta correcta es B.",
        "explanation_images": []
      }
    ]
  },
  {
    "id": "transformadas_continuas_y_discretas",
    "title": "Transformadas Continuas y Discretas",
    "script": "repaso_transformadas_continuas_y_discretas.py",
    "questions": [
      {
        "id": "TCD-01",
        "num": 1,
        "text": "¿Cuál es la forma polar del número complejo z = 1 − i?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "2e^{3πi/4}",
            "images": [
              "images/opts/tcd_01_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "√2 [cos(−π/4) + i sen(−π/4)]",
            "images": [
              "images/opts/tcd_01_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "−√2 [cos(−π/4) − i sen(−π/4)]",
            "images": [
              "images/opts/tcd_01_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "2e^{πi/4}",
            "images": [
              "images/opts/tcd_01_D.png"
            ]
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "Para z = 1 − i se tiene r = √(1² + (−1)²) = √2 y el ángulo es θ = −π/4. Por eso la forma polar correcta es √2[cos(−π/4) + i sen(−π/4)].",
        "explanation_images": []
      },
      {
        "id": "TCD-02",
        "num": 2,
        "text": "¿Cuál es el coeficiente a₀ de la serie de Fourier para la función?",
        "images": [
          "images/questions/tcd_02_funcion.png"
        ],
        "options": [
          {
            "letter": "A",
            "text": "a₀ = 0",
            "images": [
              "images/opts/tcd_02_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "a₀ = π",
            "images": [
              "images/opts/tcd_02_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "a₀ = 2π",
            "images": [
              "images/opts/tcd_02_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "a₀ = π/2",
            "images": [
              "images/opts/tcd_02_D.png"
            ]
          }
        ],
        "answers": [
          "D"
        ],
        "multi": false,
        "explanation": "El área no nula corresponde a ∫₀^π(π − x) dx = π²/2. Al aplicar la definición usada para a₀, se obtiene a₀ = π/2.",
        "explanation_images": []
      },
      {
        "id": "TCD-03",
        "num": 3,
        "text": "Se dice que una función es par si:",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "f(t) = −f(t)",
            "images": [
              "images/opts/tcd_03_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "f(t + πT) = f(πt), ∀t ∈ R",
            "images": [
              "images/opts/tcd_03_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "f(−t) = f(t)",
            "images": [
              "images/opts/tcd_03_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "f(t + 2πnT) = f(2nt), ∀t ∈ R",
            "images": [
              "images/opts/tcd_03_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "Una función par cumple f(−t) = f(t). Esto significa que su gráfica es simétrica respecto al eje vertical.",
        "explanation_images": []
      },
      {
        "id": "TCD-04",
        "num": 4,
        "text": "¿Cuál es la transformada de Laplace de la función f(t) = e⁵ᵗ t³?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "1/(s+2)",
            "images": [
              "images/opts/tcd_04_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "6/(s−5)⁴",
            "images": [
              "images/opts/tcd_04_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "1/(s+5)³",
            "images": [
              "images/opts/tcd_04_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "1/(s−3)",
            "images": [
              "images/opts/tcd_04_D.png"
            ]
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "Se usa L{tⁿe^{at}} = n!/(s−a)^{n+1}. Para n = 3 y a = 5: L{t³e^{5t}} = 3!/(s−5)^4 = 6/(s−5)^4.",
        "explanation_images": []
      },
      {
        "id": "TCD-05",
        "num": 5,
        "text": "¿Cuál es la transformada Z de la función escalón unitario de tiempo discreto?",
        "images": [
          "images/questions/tcd_05_escalon.png"
        ],
        "options": [
          {
            "letter": "A",
            "text": "1 − z⁻¹ + z⁻² − z⁻³ + ⋯",
            "images": [
              "images/opts/tcd_05_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "z/(z−2)",
            "images": [
              "images/opts/tcd_05_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "1 + z⁻¹ + z⁻² + z⁻³ + ⋯",
            "images": [
              "images/opts/tcd_05_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "z/(z+2)",
            "images": [
              "images/opts/tcd_05_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "Para el escalón unitario u[n], la transformada Z se expresa como la suma 1 + z⁻¹ + z⁻² + z⁻³ + ⋯.",
        "explanation_images": []
      },
      {
        "id": "TCD-06",
        "num": 6,
        "text": "La Transformada Z es una herramienta matemática que transforma una señal ______.",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "del dominio del tiempo discreto al dominio de la frecuencia discreta",
            "images": [
              "images/opts/tcd_06_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "del dominio continuo al dominio complejo",
            "images": [
              "images/opts/tcd_06_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "del dominio del tiempo discreto al dominio complejo",
            "images": [
              "images/opts/tcd_06_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "del dominio continuo al dominio de la frecuencia continua",
            "images": [
              "images/opts/tcd_06_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "La Transformada Z trabaja con señales de tiempo discreto y las lleva al dominio complejo z.",
        "explanation_images": []
      },
      {
        "id": "TCD-07",
        "num": 7,
        "text": "La Transformada de Laplace es una herramienta matemática que transforma ______.",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "señales en tiempo discreto al dominio complejo",
            "images": [
              "images/opts/tcd_07_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "señales en el dominio del tiempo continuo al dominio de la frecuencia compleja",
            "images": [
              "images/opts/tcd_07_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "señales en el dominio discreto al dominio de la frecuencia real",
            "images": [
              "images/opts/tcd_07_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "señales en tiempo continuo al dominio de los números reales",
            "images": [
              "images/opts/tcd_07_D.png"
            ]
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "La Transformada de Laplace transforma señales del dominio del tiempo continuo al dominio de la frecuencia compleja s.",
        "explanation_images": []
      },
      {
        "id": "TCD-08",
        "num": 8,
        "text": "La Transformada de Fourier es una herramienta matemática que ______.",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "convierte señales en el dominio del tiempo continuo al dominio de la frecuencia continua",
            "images": [
              "images/opts/tcd_08_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "convierte señales discretas al dominio complejo",
            "images": [
              "images/opts/tcd_08_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "transforma funciones algebraicas en ecuaciones diferenciales",
            "images": [
              "images/opts/tcd_08_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "convierte señales en tiempo continuo al dominio de los números enteros",
            "images": [
              "images/opts/tcd_08_D.png"
            ]
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "La Transformada de Fourier permite analizar una señal continua en el dominio de la frecuencia continua.",
        "explanation_images": []
      },
      {
        "id": "TCD-09",
        "num": 9,
        "text": "La serie de Fourier es una herramienta matemática que ______.",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "representa cualquier señal como una suma finita de funciones cuadráticas",
            "images": [
              "images/opts/tcd_09_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "representa señales periódicas como una suma infinita de senos y cosenos",
            "images": [
              "images/opts/tcd_09_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "transforma señales continuas en señales discretas",
            "images": [
              "images/opts/tcd_09_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "convierte señales periódicas en señales aleatorias",
            "images": [
              "images/opts/tcd_09_D.png"
            ]
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "La serie de Fourier representa señales periódicas como una suma infinita de términos sinusoidales: senos y cosenos.",
        "explanation_images": []
      },
      {
        "id": "TCD-10",
        "num": 10,
        "text": "El producto de dos números complejos z₁ = a + bi y z₂ = c + di, expresados en coordenadas cartesianas (x, y), se calcula como:",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "(a + c) + (b + d)i",
            "images": [
              "images/opts/tcd_10_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "(ac − bd) + (ad + bc)i",
            "images": [
              "images/opts/tcd_10_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "(ac + bd) + (ad − bc)i",
            "images": [
              "images/opts/tcd_10_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "(a − b)(c − d) + (a + b) + (c + d)i",
            "images": [
              "images/opts/tcd_10_D.png"
            ]
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "Al multiplicar (a + bi)(c + di) se obtiene ac + adi + bci + bdi². Como i² = −1, el resultado es (ac − bd) + (ad + bc)i.",
        "explanation_images": []
      }
    ]
  },
  {
    "id": "algebra_lineal",
    "title": "Álgebra Lineal",
    "script": "repaso_algebra_lineal.py",
    "questions": [
      {
        "id": "ALG-01",
        "num": 1,
        "text": "Dadas las matrices A = [aᵢⱼ]ₘₓₙ y B = [bᵢⱼ]ₚₓq, se puede realizar el producto entre A y B si:",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "n = p",
            "images": [
              "images/opts/alg_01_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "n = q",
            "images": [
              "images/opts/alg_01_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "m = p",
            "images": [
              "images/opts/alg_01_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "m = q",
            "images": [
              "images/opts/alg_01_D.png"
            ]
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "Para que el producto AB exista, el número de columnas de A debe coincidir con el número de filas de B. Por eso la condición correcta es n = p.",
        "explanation_images": []
      },
      {
        "id": "ALG-02",
        "num": 2,
        "text": "Si A es la siguiente matriz, sus autovalores son:",
        "images": [
          "images/questions/alg_02_matriz.png"
        ],
        "options": [
          {
            "letter": "A",
            "text": "λ₁ = 4, λ₂ = −3",
            "images": [
              "images/opts/alg_02_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "λ₁ = −4, λ₂ = 3",
            "images": [
              "images/opts/alg_02_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "λ₁ = −4, λ₂ = −3",
            "images": [
              "images/opts/alg_02_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "λ₁ = 4, λ₂ = 3",
            "images": [
              "images/opts/alg_02_D.png"
            ]
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "Según el desarrollo del cuestionario, los autovalores de la matriz dada son λ₁ = −4 y λ₂ = 3.",
        "explanation_images": []
      },
      {
        "id": "ALG-03",
        "num": 3,
        "text": "Si A es la siguiente matriz, su traspuesta es:",
        "images": [
          "images/questions/alg_03_matriz.png"
        ],
        "options": [
          {
            "letter": "A",
            "text": "Aᵀ = matriz 1",
            "images": [
              "images/opts/alg_03_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Aᵀ = matriz 2",
            "images": [
              "images/opts/alg_03_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Aᵀ = matriz 3",
            "images": [
              "images/opts/alg_03_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Aᵀ = matriz 4",
            "images": [
              "images/opts/alg_03_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "La matriz traspuesta se obtiene intercambiando filas por columnas. Por eso la primera fila de Aᵀ es la primera columna de A: (1, 2, 3).",
        "explanation_images": []
      },
      {
        "id": "ALG-04",
        "num": 4,
        "text": "Si B es la siguiente matriz, entonces B² es:",
        "images": [
          "images/questions/alg_04_matriz.png"
        ],
        "options": [
          {
            "letter": "A",
            "text": "No existe",
            "images": [
              "images/opts/alg_04_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "B² = matriz 1",
            "images": [
              "images/opts/alg_04_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "B² = matriz 2",
            "images": [
              "images/opts/alg_04_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "B² = matriz 3",
            "images": [
              "images/opts/alg_04_D.png"
            ]
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "B es una matriz de 2×3. Para calcular B² se necesitaría multiplicar B por B, pero las dimensiones 2×3 y 2×3 no son compatibles. Por tanto, B² no existe.",
        "explanation_images": []
      },
      {
        "id": "ALG-05",
        "num": 5,
        "text": "La matriz A = [aᵢⱼ]ₙₓₙ tiene inversa si y sólo si:",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "|A| = 0",
            "images": [
              "images/opts/alg_05_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "|A| ≠ 1",
            "images": [
              "images/opts/alg_05_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "|A| ≠ 0",
            "images": [
              "images/opts/alg_05_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "|A| = 1",
            "images": [
              "images/opts/alg_05_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "Una matriz cuadrada es invertible si y sólo si su determinante es diferente de cero.",
        "explanation_images": []
      },
      {
        "id": "ALG-06",
        "num": 6,
        "text": "La traza de la matriz A es:",
        "images": [
          "images/questions/alg_06_matriz.png"
        ],
        "options": [
          {
            "letter": "A",
            "text": "1/2",
            "images": [
              "images/opts/alg_06_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "0",
            "images": [
              "images/opts/alg_06_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "−11/10",
            "images": [
              "images/opts/alg_06_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "1",
            "images": [
              "images/opts/alg_06_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "La traza es la suma de los elementos de la diagonal principal: 1/2 + 2/5 − 2 = 5/10 + 4/10 − 20/10 = −11/10.",
        "explanation_images": []
      },
      {
        "id": "ALG-07",
        "num": 7,
        "text": "La solución de un sistema de ecuaciones lineales de orden 3×3 al aplicar el método de Gauss y obtener la matriz escalonada es:",
        "images": [
          "images/questions/alg_07_matriz.png"
        ],
        "options": [
          {
            "letter": "A",
            "text": "x = 7/2, y = 0, z = 2",
            "images": [
              "images/opts/alg_07_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "x = −7/2, y = 0, z = 2",
            "images": [
              "images/opts/alg_07_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "x = 7/2, y = 0, z = −2",
            "images": [
              "images/opts/alg_07_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "x = −7/2, y = 0, z = −2",
            "images": [
              "images/opts/alg_07_D.png"
            ]
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "De la última fila se obtiene z = 2. Luego, 3y + z = 2 da y = 0. Finalmente, −2x + y + 4z = 1 da x = 7/2.",
        "explanation_images": []
      },
      {
        "id": "ALG-08",
        "num": 8,
        "text": "La base canónica del espacio vectorial ℝ³ es:",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "{(1,1,1), (0,0,0), (0,0,1)}",
            "images": [
              "images/opts/alg_08_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "{(−1,0,0), (0,−1,0), (0,0,−1)}",
            "images": [
              "images/opts/alg_08_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "{(1,0,0), (0,−1,0), (0,0,1)}",
            "images": [
              "images/opts/alg_08_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "{(1,0,0), (0,1,0), (0,0,1)}",
            "images": [
              "images/opts/alg_08_D.png"
            ]
          }
        ],
        "answers": [
          "D"
        ],
        "multi": false,
        "explanation": "La base canónica de ℝ³ está formada por los vectores unitarios e₁ = (1,0,0), e₂ = (0,1,0) y e₃ = (0,0,1).",
        "explanation_images": []
      },
      {
        "id": "ALG-09",
        "num": 9,
        "text": "Dada la matriz A, el menor complementario de a₂₂ es:",
        "images": [
          "images/questions/alg_09_matriz.png"
        ],
        "options": [
          {
            "letter": "A",
            "text": "0",
            "images": [
              "images/opts/alg_09_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "1",
            "images": [
              "images/opts/alg_09_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "−1",
            "images": [
              "images/opts/alg_09_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "−2",
            "images": [
              "images/opts/alg_09_D.png"
            ]
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "El menor complementario de a₂₂ se obtiene eliminando la fila 2 y la columna 2 y calculando el determinante de la submatriz resultante. El valor es 0.",
        "explanation_images": []
      },
      {
        "id": "ALG-10",
        "num": 10,
        "text": "Dadas las matrices A y B, el resultado de (B − 3A)ᵀ es:",
        "images": [
          "images/questions/alg_10_matrices.png"
        ],
        "options": [
          {
            "letter": "A",
            "text": "matriz A",
            "images": [
              "images/opts/alg_10_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "matriz B",
            "images": [
              "images/opts/alg_10_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "matriz C",
            "images": [
              "images/opts/alg_10_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "matriz D",
            "images": [
              "images/opts/alg_10_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "Primero se calcula B − 3A y luego se transpone el resultado. El resultado final coincide con la opción C.",
        "explanation_images": []
      }
    ]
  },
  {
    "id": "propagacion_de_ondas",
    "title": "Propagación de ondas",
    "script": "repaso_propagacion_de_ondas.py",
    "questions": [
      {
        "id": "PROP-01",
        "num": 1,
        "text": "¿Qué modo de propagación es el más relevante para las señales de televisión y WiFi (bandas UHF y microondas), y por qué es crucial la línea de vista directa?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Ondas terrestres; porque siguen la curvatura de la Tierra.",
            "images": [
              "images/opts/prop_01_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Ondas ionosféricas; porque rebotan en la capa F2.",
            "images": [
              "images/opts/prop_01_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Ondas espaciales (línea de vista); porque estas frecuencias son fácilmente bloqueadas por obstáculos.",
            "images": [
              "images/opts/prop_01_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Ondas troposféricas; porque utilizan la dispersión atmosférica para alcanzar grandes distancias.",
            "images": [
              "images/opts/prop_01_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "UHF/microondas: ondas espaciales (LOS) y obstáculos bloquean.",
        "explanation_images": []
      },
      {
        "id": "PROP-02",
        "num": 2,
        "text": "Un enlace de radio punto a punto opera a una frecuencia de 2 GHz. Si la distancia entre el transmisor y el receptor se duplica, ¿cómo cambia la pérdida de trayectoria en espacio libre (FSPL), asumiendo que los parámetros de las antenas y la potencia de transmisión se mantienen constantes?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "La pérdida de trayectoria se reduce a la mitad.",
            "images": [
              "images/opts/prop_02_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "La pérdida de trayectoria se duplica (se incrementa en 3 dB).",
            "images": [
              "images/opts/prop_02_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "La pérdida de trayectoria se cuadruplica (se incrementa en 6 dB).",
            "images": [
              "images/opts/prop_02_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "La pérdida de trayectoria no cambia.",
            "images": [
              "images/opts/prop_02_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "Duplicar distancia añade +6 dB (FSPL ∝ d²).",
        "explanation_images": []
      },
      {
        "id": "PROP-03",
        "num": 3,
        "text": "Un ingeniero está diseñando un enlace de comunicación por microondas a 28 GHz en una región con alta precipitación. ¿Cuál es el principal impacto de la lluvia en este enlace y cómo se compara con un enlace a 5 GHz?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "La lluvia causa principalmente reflexión, y es igualmente severa en ambas frecuencias.",
            "images": [
              "images/opts/prop_03_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "La lluvia causa absorción y dispersión, siendo significativamente más severa a 28 GHz que a 5 GHz.",
            "images": [
              "images/opts/prop_03_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "La lluvia solo afecta a las frecuencias por debajo de 1 GHz, por lo que no es un problema en este caso.",
            "images": [
              "images/opts/prop_03_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "La lluvia causa refracción, y su efecto es menor a 28 GHz debido a la menor longitud de onda.",
            "images": [
              "images/opts/prop_03_D.png"
            ]
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "Lluvia: absorción/dispersión; más severa a 28 GHz que a 5 GHz.",
        "explanation_images": []
      },
      {
        "id": "PROP-04",
        "num": 4,
        "text": "Una red de sensores inalámbricos se va a desplegar en una zona boscosa. ¿Qué efecto principal tendrá la vegetación en la propagación de las señales de radio (por ejemplo, a 2.4 GHz o 5 GHz), y cómo se relaciona con la densidad del follaje?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "La vegetación causa un aumento de la señal debido a la reflexión en las hojas.",
            "images": [
              "images/opts/prop_04_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "La vegetación es transparente a las ondas de radio, no causando pérdidas significativas.",
            "images": [
              "images/opts/prop_04_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "La vegetación causa atenuación por absorción y dispersión, incrementándose con la densidad del follaje y la frecuencia.",
            "images": [
              "images/opts/prop_04_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "La vegetación solo afecta la propagación a frecuencias muy bajas (VHF).",
            "images": [
              "images/opts/prop_04_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "Vegetación atenúa y aumenta con densidad y frecuencia.",
        "explanation_images": []
      },
      {
        "id": "PROP-05",
        "num": 5,
        "text": "Para un enlace de satélite operando en la banda Ku (12−18 GHz), las pérdidas por gases atmosféricos son una consideración. ¿Cuál es la principal causa de estas pérdidas y a qué frecuencias son más pronunciadas?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Interacción con iones en la ionosfera, más significativa por debajo de 1 GHz.",
            "images": [
              "images/opts/prop_05_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Absorción resonante de moléculas de oxígeno (O2) y vapor de agua (H2O), especialmente por encima de 10 GHz.",
            "images": [
              "images/opts/prop_05_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Dispersión por partículas de polvo en la troposfera, sin dependencia de la frecuencia.",
            "images": [
              "images/opts/prop_05_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Reflexión en la capa de ozono, relevante solo para frecuencias UV.",
            "images": [
              "images/opts/prop_05_D.png"
            ]
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "Gases: absorción O2/H2O, más pronunciada >10 GHz.",
        "explanation_images": []
      },
      {
        "id": "PROP-06",
        "num": 6,
        "text": "¿Cuál de las siguientes afirmaciones describe mejor el comportamiento de las ondas superficiales (ondas terrestres) y su aplicación típica?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Son ondas que rebotan en la ionosfera y son ideales para comunicaciones de onda corta a nivel global.",
            "images": [
              "images/opts/prop_06_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Viajan directamente del transmisor al receptor en línea de vista, siendo ideales para frecuencias de microondas en entornos urbanos.",
            "images": [
              "images/opts/prop_06_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Siguen la curvatura de la Tierra, son predominantes a bajas y medias frecuencias (LF/MF), y su alcance aumenta con la conductividad del suelo y la polarización vertical.",
            "images": [
              "images/opts/prop_06_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Son dispersadas por irregularidades en la troposfera, permitiendo comunicaciones más allá de la línea de vista en frecuencias UHF.",
            "images": [
              "images/opts/prop_06_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "Onda terrestre LF/MF sigue curvatura; depende conductividad y polarización vertical.",
        "explanation_images": []
      },
      {
        "id": "PROP-07",
        "num": 7,
        "text": "Un operador de radioaficionado desea comunicarse con una estación ubicada a miles de kilómetros de distancia utilizando la banda de HF. ¿Qué factores son cruciales para la efectividad de la propagación por ondas ionosféricas en esta situación?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "La altura y despeje de las antenas para garantizar una línea de vista clara.",
            "images": [
              "images/opts/prop_07_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "La intensidad de la lluvia y la densidad del follaje a lo largo de la trayectoria.",
            "images": [
              "images/opts/prop_07_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "La hora del día, la estación del año y la actividad solar, que influyen en la densidad y altura de la capa F de la ionosfera.",
            "images": [
              "images/opts/prop_07_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "La conductividad del suelo y la polarización horizontal de la antena de transmisión.",
            "images": [
              "images/opts/prop_07_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "Ionosfera depende de hora/estación/actividad solar.",
        "explanation_images": []
      },
      {
        "id": "PROP-08",
        "num": 8,
        "text": "Un ingeniero de radio está planificando un enlace de comunicación punto a punto de 2 km a 900 MHz sobre un terreno llano y despejado. ¿Cuál de los siguientes modelos de propagación sería el más adecuado para estimar la pérdida de trayectoria inicial, y por qué el modelo de espacio libre podría ser insuficiente?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Modelo de Espacio Libre; porque es el más preciso para cualquier distancia.",
            "images": [
              "images/opts/prop_08_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Modelo de Tierra Plana (dos rayos); porque considera la reflexión del suelo, que es significativa a esta distancia y frecuencia sobre terreno llano.",
            "images": [
              "images/opts/prop_08_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Modelo de Tierra Curva; porque la curvatura de la Tierra siempre es un factor dominante.",
            "images": [
              "images/opts/prop_08_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Modelo con Obstáculos (difracción); porque siempre hay obstáculos invisibles.",
            "images": [
              "images/opts/prop_08_D.png"
            ]
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "Dos rayos considera reflexión en suelo significativa a 2 km/900 MHz.",
        "explanation_images": []
      },
      {
        "id": "PROP-09",
        "num": 9,
        "text": "Una estación base celular está intentando comunicarse con un usuario móvil detrás de una colina aislada, lo que bloquea completamente la línea de vista directa. ¿Qué modelo de propagación es el más apropiado para estimar la señal recibida en esta situación, y qué fenómeno permite la recepción?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Modelo de Espacio Libre; la señal llega sin obstáculos.",
            "images": [
              "images/opts/prop_09_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Modelo de Tierra Plana; la reflexión del suelo supera el obstáculo.",
            "images": [
              "images/opts/prop_09_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Modelo de Difracción (ej., con el principio de Huygens o Fresnel); la señal se curva alrededor del obstáculo.",
            "images": [
              "images/opts/prop_09_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Modelo Ionosférico; la señal rebota en la capa F.",
            "images": [
              "images/opts/prop_09_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "Difracción permite curvar alrededor de obstáculos.",
        "explanation_images": []
      },
      {
        "id": "PROP-10",
        "num": 10,
        "text": "Una empresa de telecomunicaciones está planificando una nueva red celular 4G en una ciudad europea. La frecuencia de operación será de 1800 MHz, con alturas de antena de estación base de 30 m y alturas de antena de usuario de 1.5 m. Los ingenieros buscan un modelo que se adapte bien a entornos urbanos densos y suburbanos en Europa. ¿Cuál de los siguientes modelos de propagación sería el más apropiado para estimar las pérdidas de trayectoria y por qué?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Modelo de Espacio Libre: Es simple y rápido para calcular pérdidas en cualquier entorno.",
            "images": [
              "images/opts/prop_10_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Modelo de Okumura-Hata: Es un modelo empírico muy preciso para entornos rurales, pero no se adapta bien a entornos urbanos densos.",
            "images": [
              "images/opts/prop_10_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Modelo COST 231 Hata: Es una extensión del modelo de Okumura-Hata, validado para frecuencias más altas y entornos urbanos densos, incluyendo un factor de corrección para centros urbanos.",
            "images": [
              "images/opts/prop_10_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Modelo SUI (Stanford University Interim): Está diseñado específicamente para sistemas WiMAX en entornos rurales, suburbanos y urbanos ligeros, pero no es ideal para ciudades europeas densas a 1800 MHz.",
            "images": [
              "images/opts/prop_10_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "COST231-Hata se ajusta a urbano europeo 1800 MHz.",
        "explanation_images": []
      }
    ]
  },
  {
    "id": "quimica",
    "title": "Química",
    "script": "repaso_quimica.py",
    "questions": [
      {
        "id": "QUI-01",
        "num": 1,
        "text": "A temperatura constante, el volumen (V) ocupado por una masa definida de un gas es inversamente proporcional a la presión aplicada.",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Ley de Boyle",
            "images": [
              "images/opts/qui_01_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Ley de Charles",
            "images": [
              "images/opts/qui_01_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Ley de Gay Lussac",
            "images": [
              "images/opts/qui_01_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Ley del Avogadro",
            "images": [
              "images/opts/qui_01_D.png"
            ]
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "La ley de Boyle establece que, a temperatura constante, el volumen de un gas es inversamente proporcional a la presión.",
        "explanation_images": []
      },
      {
        "id": "QUI-02",
        "num": 2,
        "text": "La temperatura a la cual la presión de vapor del líquido coincide con la presión de vapor del sólido, es decir, el líquido se convierte en sólido.",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Ascenso ebulliscópico",
            "images": [
              "images/opts/qui_02_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Presión osmótica",
            "images": [
              "images/opts/qui_02_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Descenso crioscópico",
            "images": [
              "images/opts/qui_02_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Descenso de la presión",
            "images": [
              "images/opts/qui_02_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "El descenso crioscópico se relaciona con la disminución del punto de congelación de una disolución.",
        "explanation_images": []
      },
      {
        "id": "QUI-03",
        "num": 3,
        "text": "Expresa el número de moles de soluto por cada litro de disolución.",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Fracción molar",
            "images": [
              "images/opts/qui_03_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Molalidad",
            "images": [
              "images/opts/qui_03_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Normalidad",
            "images": [
              "images/opts/qui_03_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Molaridad",
            "images": [
              "images/opts/qui_03_D.png"
            ]
          }
        ],
        "answers": [
          "D"
        ],
        "multi": false,
        "explanation": "La molaridad expresa los moles de soluto por litro de disolución.",
        "explanation_images": []
      },
      {
        "id": "QUI-04",
        "num": 4,
        "text": "Expresa la masa en gramos de soluto sobre el volumen de disolución.",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "% P/P",
            "images": [
              "images/opts/qui_04_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "% P/V",
            "images": [
              "images/opts/qui_04_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "% V/V",
            "images": [
              "images/opts/qui_04_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "M",
            "images": [
              "images/opts/qui_04_D.png"
            ]
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "El porcentaje peso/volumen (% P/V) relaciona gramos de soluto con volumen de disolución.",
        "explanation_images": []
      },
      {
        "id": "QUI-05",
        "num": 5,
        "text": "Los solutos están ionizados (electrolitos), tales como disoluciones de ácidos, bases o sales.",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Conductora",
            "images": [
              "images/opts/qui_05_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "No conductora",
            "images": [
              "images/opts/qui_05_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Sobresaturada",
            "images": [
              "images/opts/qui_05_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Concentrada",
            "images": [
              "images/opts/qui_05_D.png"
            ]
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "Las disoluciones con electrolitos ionizados conducen la corriente eléctrica.",
        "explanation_images": []
      },
      {
        "id": "QUI-06",
        "num": 6,
        "text": "¿Cuál de los siguientes elementos es un gas noble?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Oxígeno (O)",
            "images": [
              "images/opts/qui_06_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Helio (He)",
            "images": [
              "images/opts/qui_06_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Nitrógeno (N)",
            "images": [
              "images/opts/qui_06_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Azufre (S)",
            "images": [
              "images/opts/qui_06_D.png"
            ]
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "El helio (He) pertenece al grupo de los gases nobles.",
        "explanation_images": []
      },
      {
        "id": "QUI-07",
        "num": 7,
        "text": "La solución que contiene más soluto del que normalmente puede disolver el disolvente se denomina:",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Saturadas",
            "images": [
              "images/opts/qui_07_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Sobresaturadas",
            "images": [
              "images/opts/qui_07_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Concentradas",
            "images": [
              "images/opts/qui_07_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Diluidas",
            "images": [
              "images/opts/qui_07_D.png"
            ]
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "Una solución sobresaturada contiene más soluto que una solución saturada bajo las mismas condiciones.",
        "explanation_images": []
      },
      {
        "id": "QUI-08",
        "num": 8,
        "text": "El disolvente puede seguir diluyendo al soluto.",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Saturadas",
            "images": [
              "images/opts/qui_08_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Sobresaturadas",
            "images": [
              "images/opts/qui_08_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Concentradas",
            "images": [
              "images/opts/qui_08_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Diluidas",
            "images": [
              "images/opts/qui_08_D.png"
            ]
          }
        ],
        "answers": [
          "D"
        ],
        "multi": false,
        "explanation": "En una solución diluida existe una baja cantidad de soluto respecto al disolvente.",
        "explanation_images": []
      },
      {
        "id": "QUI-09",
        "num": 9,
        "text": "La dilución consiste en bajar la cantidad de soluto por unidad de volumen de disolución. Se logra adicionando más diluyente a la misma cantidad de soluto; se toma una porción de una solución alícuota y después esta misma se introduce en más disolvente.",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "No conductora",
            "images": [
              "images/opts/qui_09_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Conductora",
            "images": [
              "images/opts/qui_09_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Dilusión",
            "images": [
              "images/opts/qui_09_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Concentrada",
            "images": [
              "images/opts/qui_09_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "En el cuestionario la opción marcada corresponde a “Dilusión”.",
        "explanation_images": []
      },
      {
        "id": "QUI-10",
        "num": 10,
        "text": "¿Qué propiedad de los elementos aumenta de izquierda a derecha en un mismo período de la tabla periódica?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Radio atómico",
            "images": [
              "images/opts/qui_10_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Electronegatividad",
            "images": [
              "images/opts/qui_10_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Número de masa",
            "images": [
              "images/opts/qui_10_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Número de neutrones",
            "images": [
              "images/opts/qui_10_D.png"
            ]
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "La electronegatividad aumenta de izquierda a derecha en un período de la tabla periódica.",
        "explanation_images": []
      }
    ]
  },
  {
    "id": "radioenlaces",
    "title": "Radioenlaces",
    "script": "repaso_radioenlaces.py",
    "questions": [
      {
        "id": "RAD-01",
        "num": 1,
        "text": "Se recomienda representar una antena receptora en términos de una superficie equivalente para antenas.",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Monopolo",
            "images": [
              "images/opts/rad_01_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Dipolo",
            "images": [
              "images/opts/rad_01_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Paraboloide",
            "images": [
              "images/opts/rad_01_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Yagui",
            "images": [
              "images/opts/rad_01_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "En el cuestionario, la respuesta marcada es Paraboloide. En este tipo de antenas se usa el concepto de superficie equivalente o apertura equivalente.",
        "explanation_images": []
      },
      {
        "id": "RAD-02",
        "num": 2,
        "text": "El valor de ∆N (Gradiente de refractividad) que representa una tropósfera Standard es de:",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "157",
            "images": [
              "images/opts/rad_02_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "39",
            "images": [
              "images/opts/rad_02_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "0",
            "images": [
              "images/opts/rad_02_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "4/3",
            "images": [
              "images/opts/rad_02_D.png"
            ]
          },
          {
            "letter": "E",
            "text": "39",
            "images": [
              "images/opts/rad_02_E.png"
            ]
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "En el cuestionario, la opción marcada es 39 para el gradiente de refractividad de una tropósfera estándar.",
        "explanation_images": []
      },
      {
        "id": "RAD-03",
        "num": 3,
        "text": "El canal 9 de TV Abierta se encuentra dentro de la banda:",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "I",
            "images": [
              "images/opts/rad_03_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "II",
            "images": [
              "images/opts/rad_03_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "III",
            "images": [
              "images/opts/rad_03_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "IV",
            "images": [
              "images/opts/rad_03_D.png"
            ]
          },
          {
            "letter": "E",
            "text": "V",
            "images": [
              "images/opts/rad_03_E.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "El canal 9 de TV abierta pertenece a la banda III, según la opción marcada en el cuestionario.",
        "explanation_images": []
      },
      {
        "id": "RAD-04",
        "num": 4,
        "text": "¿Cuál es la fórmula para convertir coordenadas cartesianas (x, y) a coordenadas polares (r, θ)?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "r = sqrt(x^2 + y^2); theta = tan^-1(y/x)",
            "images": [
              "images/opts/rad_04_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "r = sqrt(x^2 + y^2); theta = tan^-1(x/y)",
            "images": [
              "images/opts/rad_04_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "r = sqrt(x + y^2); theta = cos^-1(y/x)",
            "images": [
              "images/opts/rad_04_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "r = sqrt(x^2 + y); theta = sin^-1(y/x)",
            "images": [
              "images/opts/rad_04_D.png"
            ]
          },
          {
            "letter": "E",
            "text": "r = x + y; theta = tan^-1(y/x)",
            "images": [
              "images/opts/rad_04_E.png"
            ]
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "La conversión correcta es r = √(x² + y²) y θ = tan⁻¹(y/x), que corresponde a la opción marcada en el cuestionario.",
        "explanation_images": []
      },
      {
        "id": "RAD-05",
        "num": 5,
        "text": "Se dice que una antena se encuentra acoplada a una línea de transmisión con impedancia Z cuando:",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Z = Rr ; Z = Rp",
            "images": [
              "images/opts/rad_05_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Z = Rr + Rp",
            "images": [
              "images/opts/rad_05_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Z = Rr − Rp",
            "images": [
              "images/opts/rad_05_C.png"
            ]
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "En el cuestionario, la opción marcada es Z = Rr + Rp.",
        "explanation_images": []
      },
      {
        "id": "RAD-06",
        "num": 6,
        "text": "La ganancia de una antena dipolo de λ/2 es de:",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "0 dBd",
            "images": [
              "images/opts/rad_06_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "1.64 dBd",
            "images": [
              "images/opts/rad_06_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "1.76 dBd",
            "images": [
              "images/opts/rad_06_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "2.15 dBd",
            "images": [
              "images/opts/rad_06_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "En el cuestionario, la opción marcada para la ganancia de una antena dipolo de λ/2 es 1.76 dBd.",
        "explanation_images": []
      },
      {
        "id": "RAD-07",
        "num": 7,
        "text": "El efecto que ocurre en una transmisión cuando aparece el efecto multitrayecto es:",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Desvanecimiento",
            "images": [
              "images/opts/rad_07_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Despolarización",
            "images": [
              "images/opts/rad_07_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Amplificación",
            "images": [
              "images/opts/rad_07_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Absorción",
            "images": [
              "images/opts/rad_07_D.png"
            ]
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "El multitrayecto provoca variaciones de la señal recibida, conocidas como desvanecimiento.",
        "explanation_images": []
      },
      {
        "id": "RAD-08",
        "num": 8,
        "text": "Las pérdidas de espacio libre de un enlace separado 6.5 km que opera a una frecuencia de 220 MHz con un ancho de banda de 89.3 kHz es de:",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "27.725 dB",
            "images": [
              "images/opts/rad_08_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "35.557 dB",
            "images": [
              "images/opts/rad_08_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "87.725 dB",
            "images": [
              "images/opts/rad_08_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "95.56 dB",
            "images": [
              "images/opts/rad_08_D.png"
            ]
          },
          {
            "letter": "E",
            "text": "107.725 dB",
            "images": [
              "images/opts/rad_08_E.png"
            ]
          },
          {
            "letter": "F",
            "text": "147.725 dB",
            "images": [
              "images/opts/rad_08_F.png"
            ]
          },
          {
            "letter": "G",
            "text": "155.557 dB",
            "images": [
              "images/opts/rad_08_G.png"
            ]
          }
        ],
        "answers": [
          "D"
        ],
        "multi": false,
        "explanation": "En el cuestionario, la opción marcada para las pérdidas de espacio libre es 95.56 dB.",
        "explanation_images": []
      },
      {
        "id": "RAD-09",
        "num": 9,
        "text": "¿Cuál de los siguientes tipos de antenas se utiliza para un enlace auxiliar en la radiodifusión FM?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Dipolo Cruzado",
            "images": [
              "images/opts/rad_09_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Dipolo Circular",
            "images": [
              "images/opts/rad_09_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Yagui",
            "images": [
              "images/opts/rad_09_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Monopolo Vertical",
            "images": [
              "images/opts/rad_09_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "En el cuestionario, la opción marcada para el enlace auxiliar en radiodifusión FM es Yagui.",
        "explanation_images": []
      },
      {
        "id": "RAD-10",
        "num": 10,
        "text": "Un sistema antireflectante podría ser comparado con un sistema de recepción por diversidad de:",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Espacio",
            "images": [
              "images/opts/rad_10_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Frecuencia",
            "images": [
              "images/opts/rad_10_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Ángulo",
            "images": [
              "images/opts/rad_10_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Polaridad",
            "images": [
              "images/opts/rad_10_D.png"
            ]
          },
          {
            "letter": "E",
            "text": "Trayecto",
            "images": [
              "images/opts/rad_10_E.png"
            ]
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "En el cuestionario, la opción marcada es diversidad de espacio.",
        "explanation_images": []
      }
    ]
  },
  {
    "id": "redes_de_datos_i",
    "title": "Redes de datos I",
    "script": "repaso_redes_de_datos_i.py",
    "questions": [
      {
        "id": "RDI-01",
        "num": 1,
        "text": "¿Cuál es el tamaño de la cabecera del protocolo TCP cuando se realiza la negociación del tamaño máximo del segmento (MSS)?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "40",
            "images": [
              "images/opts/rdi_01_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "20",
            "images": [
              "images/opts/rdi_01_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "60",
            "images": [
              "images/opts/rdi_01_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "8",
            "images": [
              "images/opts/rdi_01_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "En el cuestionario, la opción resaltada es 60 bytes. Al considerar la negociación de MSS dentro del escenario planteado, se toma como respuesta la cabecera TCP de 60 bytes.",
        "explanation_images": []
      },
      {
        "id": "RDI-02",
        "num": 2,
        "text": "En una red se implementa el protocolo RIPv2, ¿cuál es el número máximo de RTEs que pueden ser enviadas en un solo mensaje UPDATE?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "20",
            "images": [
              "images/opts/rdi_02_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "25",
            "images": [
              "images/opts/rdi_02_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "10",
            "images": [
              "images/opts/rdi_02_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "No hay límite",
            "images": [
              "images/opts/rdi_02_D.png"
            ]
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "En RIPv2, un mensaje UPDATE puede transportar como máximo 25 entradas de ruta (RTE). Por eso la opción correcta es 25.",
        "explanation_images": []
      },
      {
        "id": "RDI-03",
        "num": 3,
        "text": "Suponga que existe una red conformada por 7 routers conectados en serie que tienen configurado RIP. Una vez que existe convergencia en toda la red, R3 tiene un problema de conectividad. ¿Cuál es el tiempo que le toma a R5 enterarse de este problema?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "RIP tiene alta convergencia por lo que es inmediato",
            "images": [
              "images/opts/rdi_03_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "30 segundos",
            "images": [
              "images/opts/rdi_03_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "60 segundos",
            "images": [
              "images/opts/rdi_03_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "90 segundos",
            "images": [
              "images/opts/rdi_03_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "La opción resaltada en el cuestionario es 60 segundos. En el planteamiento simplificado, la información del problema avanza por actualizaciones RIP hasta llegar a R5.",
        "explanation_images": []
      },
      {
        "id": "RDI-04",
        "num": 4,
        "text": "En una red punto a punto entre dos routers (R1 — R2), se implementa el protocolo de enrutamiento OSPFv3. Considerando que los routers generan un mensaje Hello de 40 bytes, ¿cuál es el tráfico total generado por el protocolo a nivel de la capa de enlace de datos en 45 minutos si se utiliza Ethernet como protocolo de capa 2?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "El tráfico es despreciable",
            "images": [
              "images/opts/rdi_04_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "65536 bytes",
            "images": [
              "images/opts/rdi_04_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "52920 bytes",
            "images": [
              "images/opts/rdi_04_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "8192 bytes",
            "images": [
              "images/opts/rdi_04_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "En el cuestionario, la opción resaltada es 52920 bytes para el tráfico total generado en el enlace.",
        "explanation_images": []
      },
      {
        "id": "RDI-05",
        "num": 5,
        "text": "¿Cuál de las siguientes afirmaciones es verdadera referida a la asignación de puertos a VLANs en los switches?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Todos los puertos que pertenecen a una misma VLAN han de ser contiguos",
            "images": [
              "images/opts/rdi_05_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Si se definen VLANs, todos los puertos deben ser asignados explícitamente a una u otra; no puede quedar ninguno en la VLAN default",
            "images": [
              "images/opts/rdi_05_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Al definir VLANs el puerto de consola queda fuera de servicio",
            "images": [
              "images/opts/rdi_05_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Si un puerto está en modo trunk recibirá el tráfico broadcast de todas las VLANs",
            "images": [
              "images/opts/rdi_05_D.png"
            ]
          }
        ],
        "answers": [
          "D"
        ],
        "multi": false,
        "explanation": "La opción resaltada es la D. Un puerto trunk transporta tráfico de varias VLANs, por lo que puede recibir tráfico broadcast de las VLANs permitidas en el trunk.",
        "explanation_images": []
      },
      {
        "id": "RDI-06",
        "num": 6,
        "text": "¿Cuál es el tamaño de la cabecera del protocolo TCP, si el valor del Tamaño Máximo del Segmento no se negocia y se usa el valor por defecto?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "20",
            "images": [
              "images/opts/rdi_06_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "60",
            "images": [
              "images/opts/rdi_06_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "40",
            "images": [
              "images/opts/rdi_06_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "8",
            "images": [
              "images/opts/rdi_06_D.png"
            ]
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "Sin opciones adicionales, la cabecera TCP tiene un tamaño base de 20 bytes. Por eso la opción correcta es 20.",
        "explanation_images": []
      },
      {
        "id": "RDI-07",
        "num": 7,
        "text": "En una red se implementa el protocolo RIPv2, ¿cuál es el valor en segundos del temporizador FLUSH que se usa para eliminar una entrada de la tabla de rutas?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "30",
            "images": [
              "images/opts/rdi_07_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "180",
            "images": [
              "images/opts/rdi_07_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "240",
            "images": [
              "images/opts/rdi_07_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "360",
            "images": [
              "images/opts/rdi_07_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "El temporizador Flush de RIP se usa para eliminar rutas inválidas de la tabla. El valor indicado en el cuestionario es 240 segundos.",
        "explanation_images": []
      },
      {
        "id": "RDI-08",
        "num": 8,
        "text": "¿Qué protocolo de enrutamiento interno (IGP) recomendaría implementar en una red corporativa, si es indispensable que el tiempo de detección de fallos en las relaciones de vecindad sea por defecto menor a 20 segundos?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "BGP",
            "images": [
              "images/opts/rdi_08_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "ISIS",
            "images": [
              "images/opts/rdi_08_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "OSPF",
            "images": [
              "images/opts/rdi_08_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "EIGRP",
            "images": [
              "images/opts/rdi_08_D.png"
            ]
          }
        ],
        "answers": [
          "D"
        ],
        "multi": false,
        "explanation": "La opción resaltada es EIGRP. Por defecto, EIGRP puede detectar fallos de vecindad en un tiempo menor a 20 segundos.",
        "explanation_images": []
      },
      {
        "id": "RDI-09",
        "num": 9,
        "text": "En una red punto a punto entre dos routers (R1 — R2), se implementa el protocolo de enrutamiento OSPFv2. Considerando que los routers generan un mensaje Hello de 30 bytes, ¿cuál es el tráfico total generado por el protocolo a nivel de la capa de enlace de datos en 30 minutos si se utiliza Ethernet como protocolo de capa 2?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "El tráfico es despreciable",
            "images": [
              "images/opts/rdi_09_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "65536 bytes",
            "images": [
              "images/opts/rdi_09_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "52920 bytes",
            "images": [
              "images/opts/rdi_09_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "24480 bytes",
            "images": [
              "images/opts/rdi_09_D.png"
            ]
          }
        ],
        "answers": [
          "D"
        ],
        "multi": false,
        "explanation": "En el cuestionario, la opción resaltada es 24480 bytes para el tráfico total generado por OSPFv2 en el intervalo indicado.",
        "explanation_images": []
      },
      {
        "id": "RDI-10",
        "num": 10,
        "text": "¿Qué método de reenvío de trama recibe la trama completa y realiza una comprobación CRC para detectar errores antes de reenviar la trama?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Conmutación de corte",
            "images": [
              "images/opts/rdi_10_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Conmutación de almacenamiento y reenvío",
            "images": [
              "images/opts/rdi_10_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Conmutación sin fragmentos",
            "images": [
              "images/opts/rdi_10_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Conmutación de avance rápido",
            "images": [
              "images/opts/rdi_10_D.png"
            ]
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "La conmutación de almacenamiento y reenvío recibe la trama completa y verifica el CRC antes de reenviarla.",
        "explanation_images": []
      }
    ]
  },
  {
    "id": "redes_de_datos_ii",
    "title": "Redes de datos II",
    "script": "repaso_redes_de_datos_ii.py",
    "questions": [
      {
        "id": "RDII-01",
        "num": 1,
        "text": "¿Qué tipo de servicio MPLS se implementa cuando se usa los valores del AFI y SAFI de BGP en 1 y 4 respectivamente?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "MPLS TE",
            "images": [
              "images/opts/rdii_01_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "MPLS L3VPN",
            "images": [
              "images/opts/rdii_01_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "6VPE",
            "images": [
              "images/opts/rdii_01_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "6PE",
            "images": [
              "images/opts/rdii_01_D.png"
            ]
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "En BGP, AFI = 1 corresponde a IPv4 y SAFI = 4 se asocia al transporte de rutas VPN. Por eso el servicio indicado es MPLS L3VPN.",
        "explanation_images": []
      },
      {
        "id": "RDII-02",
        "num": 2,
        "text": "En una red IPv4 que implementa un túnel VXLAN se transmite un PDU de 100 bytes medidos a nivel de la capa de aplicación. ¿Cuál es el valor de este PDU a nivel de la capa de enlace de datos si la aplicación utilizada es HTTP/2?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "208",
            "images": [
              "images/opts/rdii_02_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "158",
            "images": [
              "images/opts/rdii_02_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "228",
            "images": [
              "images/opts/rdii_02_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "168",
            "images": [
              "images/opts/rdii_02_D.png"
            ]
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "Según el cuestionario, para el escenario IPv4 con túnel VXLAN y una PDU de aplicación de 100 bytes usando HTTP/2, el valor a nivel de enlace de datos es 208 bytes.",
        "explanation_images": []
      },
      {
        "id": "RDII-03",
        "num": 3,
        "text": "En una red MPLS se implementa el servicio de Ingeniería de Tráfico. ¿Qué mensaje del protocolo RSVP se utiliza en la red para enviar la etiqueta que será utilizada por el servicio TE?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "RESV",
            "images": [
              "images/opts/rdii_03_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "HELLO",
            "images": [
              "images/opts/rdii_03_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "PATH",
            "images": [
              "images/opts/rdii_03_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "UPDATE",
            "images": [
              "images/opts/rdii_03_D.png"
            ]
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "En RSVP-TE, el mensaje RESV se usa en el proceso de reserva y distribución de la etiqueta hacia el flujo correspondiente.",
        "explanation_images": []
      },
      {
        "id": "RDII-04",
        "num": 4,
        "text": "En una red punto a punto entre dos routers (R1 — R2), se implementa el protocolo de enrutamiento BGP con IPv6. Considerando que los routers generan un mensaje keepalive de 40 bytes, ¿cuál es el tráfico total generado por el protocolo a nivel de la capa de enlace de datos en 45 minutos si se utiliza Ethernet como protocolo de capa 2?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "El tráfico es despreciable",
            "images": [
              "images/opts/rdii_04_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "14160 bytes",
            "images": [
              "images/opts/rdii_04_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "52920 bytes",
            "images": [
              "images/opts/rdii_04_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "10620 bytes",
            "images": [
              "images/opts/rdii_04_D.png"
            ]
          }
        ],
        "answers": [
          "D"
        ],
        "multi": false,
        "explanation": "La opción resaltada en el cuestionario para este caso es 10620 bytes.",
        "explanation_images": []
      },
      {
        "id": "RDII-05",
        "num": 5,
        "text": "¿Qué atributo BGP permite modificar la ruta, tiene un valor por defecto de 100 y además los cambios realizados a este atributo son propagados en las sesiones iBGP?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "AS_PATH",
            "images": [
              "images/opts/rdii_05_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Local Preference",
            "images": [
              "images/opts/rdii_05_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "MED",
            "images": [
              "images/opts/rdii_05_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Weight",
            "images": [
              "images/opts/rdii_05_D.png"
            ]
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "Local Preference es un atributo BGP usado para preferir rutas dentro del sistema autónomo. Su valor por defecto común es 100 y se propaga en sesiones iBGP.",
        "explanation_images": []
      },
      {
        "id": "RDII-06",
        "num": 6,
        "text": "¿Qué tipo de servicio se implementa cuando se usa los valores del AFI y SAFI de BGP en 25 y 70 respectivamente?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "MPLS TE",
            "images": [
              "images/opts/rdii_06_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "MPLS L3VPN",
            "images": [
              "images/opts/rdii_06_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "6VPE",
            "images": [
              "images/opts/rdii_06_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "EVPN",
            "images": [
              "images/opts/rdii_06_D.png"
            ]
          }
        ],
        "answers": [
          "D"
        ],
        "multi": false,
        "explanation": "La combinación AFI = 25 y SAFI = 70 corresponde al servicio EVPN.",
        "explanation_images": []
      },
      {
        "id": "RDII-07",
        "num": 7,
        "text": "En una red IPv4 que implementa un túnel VXLAN se transmite un PDU de 304 bytes medidos a nivel de la capa de aplicación. ¿Cuál es el valor de este PDU a nivel de la capa de enlace de datos si la aplicación utilizada es SNMPv2?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "408",
            "images": [
              "images/opts/rdii_07_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "558",
            "images": [
              "images/opts/rdii_07_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "328",
            "images": [
              "images/opts/rdii_07_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "400",
            "images": [
              "images/opts/rdii_07_D.png"
            ]
          }
        ],
        "answers": [
          "D"
        ],
        "multi": false,
        "explanation": "Según el cuestionario, para el escenario IPv4 con VXLAN y una PDU de aplicación de 304 bytes usando SNMPv2, el valor a nivel de enlace de datos es 400 bytes.",
        "explanation_images": []
      },
      {
        "id": "RDII-08",
        "num": 8,
        "text": "En una red MPLS se implementa el servicio de Ingeniería de Tráfico. ¿Qué mensaje del protocolo RSVP se utiliza en la red para enviar la etiqueta que será utilizada por el servicio TE?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "RESV",
            "images": [
              "images/opts/rdii_08_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "HELLO",
            "images": [
              "images/opts/rdii_08_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "PATH",
            "images": [
              "images/opts/rdii_08_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "UPDATE",
            "images": [
              "images/opts/rdii_08_D.png"
            ]
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "El mensaje RESV participa en la reserva de recursos y en el envío de la etiqueta usada por el servicio de Ingeniería de Tráfico.",
        "explanation_images": []
      },
      {
        "id": "RDII-09",
        "num": 9,
        "text": "En una red punto a punto entre dos routers (R1 — R2), se implementa el protocolo de enrutamiento BGP con IPv4. Considerando que los routers generan un mensaje keepalive de 30 bytes, ¿cuál es el tráfico total generado por el protocolo a nivel de la capa de enlace de datos en 30 minutos si se utiliza Ethernet como protocolo de capa 2?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "El tráfico es despreciable",
            "images": [
              "images/opts/rdii_09_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "1416 bytes",
            "images": [
              "images/opts/rdii_09_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "5292 bytes",
            "images": [
              "images/opts/rdii_09_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "5280 bytes",
            "images": [
              "images/opts/rdii_09_D.png"
            ]
          }
        ],
        "answers": [
          "D"
        ],
        "multi": false,
        "explanation": "La opción resaltada en el cuestionario para este caso es 5280 bytes.",
        "explanation_images": []
      },
      {
        "id": "RDII-10",
        "num": 10,
        "text": "¿Cuál de los siguientes atributos de BGP es considerado opcional no transitivo?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "AS_PATH",
            "images": [
              "images/opts/rdii_10_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Local Preference",
            "images": [
              "images/opts/rdii_10_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Originator",
            "images": [
              "images/opts/rdii_10_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Weight",
            "images": [
              "images/opts/rdii_10_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "En el cuestionario, el atributo señalado como opcional no transitivo es Originator.",
        "explanation_images": []
      }
    ]
  },
  {
    "id": "seguridad_de_redes",
    "title": "Seguridad de Redes",
    "script": "repaso_seguridad_de_redes.py",
    "questions": [
      {
        "id": "SEG-01",
        "num": 1,
        "text": "El criptoanálisis es:",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Desarrollar nuevos algoritmos criptográficos",
            "images": [
              "images/opts/seg_01_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Encontrar una vulnerabilidad en un sistema criptográfico",
            "images": [
              "images/opts/seg_01_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Implementar técnicas para cambiar la información",
            "images": [
              "images/opts/seg_01_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Todas las opciones",
            "images": [
              "images/opts/seg_01_D.png"
            ]
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "El criptoanálisis busca encontrar debilidades o vulnerabilidades en un sistema criptográfico. Por eso la opción correcta es B.",
        "explanation_images": []
      },
      {
        "id": "SEG-02",
        "num": 2,
        "text": "Desde un punto de vista probabilístico, ¿cuántos intentos debe realizar un atacante para romper la seguridad de la llave mediante un ataque por fuerza bruta?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Todas las posibles combinaciones",
            "images": [
              "images/opts/seg_02_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Todas las posibles combinaciones menos un intento",
            "images": [
              "images/opts/seg_02_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "La mitad de las combinaciones",
            "images": [
              "images/opts/seg_02_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Depende del tamaño de la llave",
            "images": [
              "images/opts/seg_02_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "Desde el punto de vista probabilístico, en promedio un ataque de fuerza bruta requiere probar la mitad de las combinaciones posibles.",
        "explanation_images": []
      },
      {
        "id": "SEG-03",
        "num": 3,
        "text": "Según la Teoría de Shannon, ¿cuál es el principio que dificulta la relación entre el texto plano y la key?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Confusión",
            "images": [
              "images/opts/seg_03_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Difusión",
            "images": [
              "images/opts/seg_03_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Entropía",
            "images": [
              "images/opts/seg_03_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Llave de encriptación",
            "images": [
              "images/opts/seg_03_D.png"
            ]
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "La confusión busca hacer difícil la relación entre el texto plano, la clave y el texto cifrado. Por eso la opción correcta es A.",
        "explanation_images": []
      },
      {
        "id": "SEG-04",
        "num": 4,
        "text": "¿Cuál de las siguientes opciones de firewall es la mejor en cuanto al rendimiento que ofrece a través del consumo menor de recursos del sistema?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Stateless firewall",
            "images": [
              "images/opts/seg_04_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Dual host firewall",
            "images": [
              "images/opts/seg_04_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Stateful firewall",
            "images": [
              "images/opts/seg_04_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Todas las opciones por igual",
            "images": [
              "images/opts/seg_04_D.png"
            ]
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "Un stateless firewall analiza paquetes sin mantener información de estado de las conexiones, por lo que consume menos recursos y ofrece mejor rendimiento.",
        "explanation_images": []
      },
      {
        "id": "SEG-05",
        "num": 5,
        "text": "¿Cuál de las siguientes opciones no es una amenaza a la seguridad de la información?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Eavesdropping",
            "images": [
              "images/opts/seg_05_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Desastre natural",
            "images": [
              "images/opts/seg_05_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Fuga de información",
            "images": [
              "images/opts/seg_05_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Ninguna opción",
            "images": [
              "images/opts/seg_05_D.png"
            ]
          }
        ],
        "answers": [
          "D"
        ],
        "multi": false,
        "explanation": "Eavesdropping, desastre natural y fuga de información sí pueden representar amenazas. Por tanto, la opción marcada es Ninguna opción.",
        "explanation_images": []
      },
      {
        "id": "SEG-06",
        "num": 6,
        "text": "¿Cuáles son los indicadores que permiten medir los cambios que produce un atacante dentro del sistema?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Indicadores de rastreo y seguimiento del estado del sistema.",
            "images": [
              "images/opts/seg_06_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Indicadores del grado de efectividad de los controles de seguridad",
            "images": [
              "images/opts/seg_06_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Indicadores de medición del entorno",
            "images": [
              "images/opts/seg_06_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Indicadores de gestión interna",
            "images": [
              "images/opts/seg_06_D.png"
            ]
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "Los indicadores de rastreo y seguimiento del estado del sistema permiten observar los cambios producidos dentro del sistema.",
        "explanation_images": []
      },
      {
        "id": "SEG-07",
        "num": 7,
        "text": "¿Cuál de las siguientes opciones no es una vulnerabilidad a la seguridad de la información?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Desastre",
            "images": [
              "images/opts/seg_07_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Actualizaciones del sistema no realizadas",
            "images": [
              "images/opts/seg_07_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Contraseñas débiles",
            "images": [
              "images/opts/seg_07_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Ninguna de las opciones",
            "images": [
              "images/opts/seg_07_D.png"
            ]
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "Un desastre se considera una amenaza o evento que puede afectar la seguridad, pero no una vulnerabilidad propia del sistema.",
        "explanation_images": []
      },
      {
        "id": "SEG-08",
        "num": 8,
        "text": "Cuando se ha producido un ataque a un sistema, la implementación de soluciones para la seguridad permitirán:",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Corregir la vulnerabilidad",
            "images": [
              "images/opts/seg_08_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Detectar vulnerabilidades futuras",
            "images": [
              "images/opts/seg_08_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Prevenir vulnerabilidades futuras",
            "images": [
              "images/opts/seg_08_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Todas las opciones",
            "images": [
              "images/opts/seg_08_D.png"
            ]
          }
        ],
        "answers": [
          "D"
        ],
        "multi": false,
        "explanation": "Las soluciones de seguridad pueden corregir la vulnerabilidad, ayudar a detectar vulnerabilidades futuras y también prevenir nuevos problemas.",
        "explanation_images": []
      },
      {
        "id": "SEG-09",
        "num": 9,
        "text": "En un sistema de comunicación se implementa seguridad de la información a través de encriptación simétrica usando el algoritmo Data Encryption Standard. El sistema permite la transmisión full duplex. ¿Cuántas rondas se ejecutan en el proceso de encriptación?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "2",
            "images": [
              "images/opts/seg_09_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "13",
            "images": [
              "images/opts/seg_09_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "16",
            "images": [
              "images/opts/seg_09_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "64",
            "images": [
              "images/opts/seg_09_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "DES utiliza 16 rondas en el proceso de encriptación. Por eso la opción correcta es C.",
        "explanation_images": []
      },
      {
        "id": "SEG-10",
        "num": 10,
        "text": "En un escenario de infraestructura de comunicación y transmisión de datos entre solamente dos usuarios que utilizan encriptación asimétrica, ¿cuántas llaves se utilizan?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "2",
            "images": [
              "images/opts/seg_10_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "3",
            "images": [
              "images/opts/seg_10_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "4",
            "images": [
              "images/opts/seg_10_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "6",
            "images": [
              "images/opts/seg_10_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "En encriptación asimétrica cada usuario tiene una llave pública y una privada. Para dos usuarios se utilizan 4 llaves en total.",
        "explanation_images": []
      }
    ]
  },
  {
    "id": "sistemas_digitales",
    "title": "Sistemas Digitales",
    "script": "repaso_sistemas_digitales.py",
    "questions": [
      {
        "id": "SD-01",
        "num": 1,
        "text": "¿Cuál es el equivalente hexadecimal del número binario siguiente: 111011₂?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "3B₁₆",
            "images": [
              "images/opts/sd_01_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "59",
            "images": [
              "images/opts/sd_01_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "7B₁₆",
            "images": [
              "images/opts/sd_01_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "B3₁₆",
            "images": [
              "images/opts/sd_01_D.png"
            ]
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "El binario 111011 se agrupa como 0011 1011, que corresponde a 3B en hexadecimal.",
        "explanation_images": []
      },
      {
        "id": "SD-02",
        "num": 2,
        "text": "Indique cuál es el complemento a dos del siguiente número binario: 11011.110₂.",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "00100.010",
            "images": [
              "images/opts/sd_02_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "00100.101",
            "images": [
              "images/opts/sd_02_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "00100.001",
            "images": [
              "images/opts/sd_02_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "0100.010",
            "images": [
              "images/opts/sd_02_D.png"
            ]
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "La opción marcada en el cuestionario es 00100.010.",
        "explanation_images": []
      },
      {
        "id": "SD-03",
        "num": 3,
        "text": "Para diseñar un circuito sumador/restador de dos números de cuatro bits, ¿qué circuitos integrados utilizaría?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "7483, 7486",
            "images": [
              "images/opts/sd_03_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "7485, 7486",
            "images": [
              "images/opts/sd_03_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "7483, 7485",
            "images": [
              "images/opts/sd_03_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "7485, 7486",
            "images": [
              "images/opts/sd_03_D.png"
            ]
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "El 7483 se usa como sumador de 4 bits y el 7486 contiene compuertas XOR, útiles para implementar la resta mediante complemento a dos.",
        "explanation_images": []
      },
      {
        "id": "SD-04",
        "num": 4,
        "text": "El circuito integrado 74138 es:",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Decodificador 3 a 8",
            "images": [
              "images/opts/sd_04_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Decodificador 4 a 16",
            "images": [
              "images/opts/sd_04_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Multiplexor 8 a 1",
            "images": [
              "images/opts/sd_04_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Multiplexor 4 a 1",
            "images": [
              "images/opts/sd_04_D.png"
            ]
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "El 74138 es un decodificador/demultiplexor de 3 entradas a 8 salidas.",
        "explanation_images": []
      },
      {
        "id": "SD-05",
        "num": 5,
        "text": "Si al número binario 1100111 le añadimos el bit de paridad par, el nuevo código formado sería:",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "11001111",
            "images": [
              "images/opts/sd_05_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "11001110",
            "images": [
              "images/opts/sd_05_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "01100111",
            "images": [
              "images/opts/sd_05_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "11100111",
            "images": [
              "images/opts/sd_05_D.png"
            ]
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "En 1100111 hay cinco unos. Para paridad par se agrega 0 al final, manteniendo una cantidad par de unos según la opción marcada: 11001110.",
        "explanation_images": []
      },
      {
        "id": "SD-06",
        "num": 6,
        "text": "¿Qué es una compuerta lógica?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Circuito combinacional para realizar operaciones lógicas sobre una o más entradas binarias y produce una salida binaria",
            "images": [
              "images/opts/sd_06_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Circuito eléctrico para realizar operaciones sobre una o más entradas que produce una salida",
            "images": [
              "images/opts/sd_06_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Circuito integrado para realizar operaciones eléctricas sobre una o más entradas",
            "images": [
              "images/opts/sd_06_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Son los circuitos integrados 7400, 74138",
            "images": [
              "images/opts/sd_06_D.png"
            ]
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "Una compuerta lógica realiza operaciones lógicas sobre entradas binarias y entrega una salida binaria.",
        "explanation_images": []
      },
      {
        "id": "SD-07",
        "num": 7,
        "text": "¿Qué es el código Hamming?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Código de detección y corrección de errores, donde se añaden varios bits de paridad",
            "images": [
              "images/opts/sd_07_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Código de detección de información con bits de paridad",
            "images": [
              "images/opts/sd_07_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Código de detección y corrección de bits de paridad",
            "images": [
              "images/opts/sd_07_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Código de detección y corrección de bits",
            "images": [
              "images/opts/sd_07_D.png"
            ]
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "El código Hamming usa bits de paridad para detectar y corregir errores.",
        "explanation_images": []
      },
      {
        "id": "SD-08",
        "num": 8,
        "text": "¿Qué es una compuerta XOR?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Compuerta lógica digital que devuelve un resultado 1 solo cuando sus dos entradas son diferentes",
            "images": [
              "images/opts/sd_08_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Compuerta lógica digital que devuelve un resultado 1 solo cuando sus dos entradas son iguales",
            "images": [
              "images/opts/sd_08_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Compuerta lógica digital que devuelve un resultado 0 solo cuando sus dos entradas son diferentes",
            "images": [
              "images/opts/sd_08_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Es el circuito integrado 7485",
            "images": [
              "images/opts/sd_08_D.png"
            ]
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "La compuerta XOR entrega 1 cuando sus entradas son diferentes.",
        "explanation_images": []
      },
      {
        "id": "SD-09",
        "num": 9,
        "text": "¿Cómo se representa el número 47 en código BCD?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "01000111",
            "images": [
              "images/opts/sd_09_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "101111",
            "images": [
              "images/opts/sd_09_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "100111",
            "images": [
              "images/opts/sd_09_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "47",
            "images": [
              "images/opts/sd_09_D.png"
            ]
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "En BCD, el 4 se representa como 0100 y el 7 como 0111. Por tanto, 47 es 0100 0111.",
        "explanation_images": []
      },
      {
        "id": "SD-10",
        "num": 10,
        "text": "¿Qué es el álgebra de Boole?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Rama de las matemáticas que trabaja con valores binarios (0 y 1) y operadores lógicos",
            "images": [
              "images/opts/sd_10_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Rama de las matemáticas para simplificar circuitos",
            "images": [
              "images/opts/sd_10_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Rama de las matemáticas digitales que trabaja con variables binarias",
            "images": [
              "images/opts/sd_10_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Rama de las matemáticas que trabaja con bits y operadores lógicos * . +",
            "images": [
              "images/opts/sd_10_D.png"
            ]
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "El álgebra de Boole trabaja con valores binarios y operadores lógicos, base del análisis y diseño de circuitos digitales.",
        "explanation_images": []
      }
    ]
  },
  {
    "id": "sistemas_digitales_ii",
    "title": "Sistemas Digitales II",
    "script": "repaso_sistemas_digitales_ii.py",
    "questions": [
      {
        "id": "SD2-01",
        "num": 1,
        "text": "¿Cuál de las siguientes entidades en VHDL se utiliza para definir un decodificador de 1 a 2 con una entrada x y dos salidas y0 y y1 que corresponden a un vector y?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "entity mux2to1 is port (A, B, S: in std_logic; Y: out std_logic); end entity; architecture Behavioral of mux2to1 is begin Y <= A and B; end Behavioral;",
            "images": [
              "images/opts/sd2_01_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "entity deco is port( x: in bit; y: out bit_vector(1 downto 0);",
            "images": [
              "images/opts/sd2_01_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "process(S) begin if S = '1' then Y <= A; else Y <= B; end if; end process;",
            "images": [
              "images/opts/sd2_01_C.png"
            ]
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "La entidad correcta debe llamarse deco, tener la entrada x y la salida y como bit_vector(1 downto 0), porque se trata de un decodificador 1 a 2.",
        "explanation_images": []
      },
      {
        "id": "SD2-02",
        "num": 2,
        "text": "¿Cuál de las siguientes líneas estaría en el cuerpo de la arquitectura en VHDL que define una puerta OR de dos entradas?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Y <= A and B;",
            "images": [
              "images/opts/sd2_02_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "entidad deco is port( x: in bit; y: out bit_vector(1 downto 0) );",
            "images": [
              "images/opts/sd2_02_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "z <= x or y;",
            "images": [
              "images/opts/sd2_02_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Y <= A xor B;",
            "images": [
              "images/opts/sd2_02_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "Una puerta OR de dos entradas se implementa con el operador or. Por eso la línea correcta es z <= x or y;",
        "explanation_images": []
      },
      {
        "id": "SD2-03",
        "num": 3,
        "text": "Se tiene un circuito que consta de un flip-flop D con su entrada D conectada a la salida q negada. ¿Cuál será la forma de onda de Q?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Triangular",
            "images": [
              "images/opts/sd2_03_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "El primer flip-flop estará en estado 1 y el segundo en estado 0",
            "images": [
              "images/opts/sd2_03_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Media onda rectificada",
            "images": [
              "images/opts/sd2_03_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Cuadrada",
            "images": [
              "images/opts/sd2_03_D.png"
            ]
          }
        ],
        "answers": [
          "D"
        ],
        "multi": false,
        "explanation": "Si D se conecta a la salida negada, el flip-flop cambia de estado en cada pulso de reloj. Ese comportamiento genera una forma de onda cuadrada.",
        "explanation_images": []
      },
      {
        "id": "SD2-04",
        "num": 4,
        "text": "Se tiene un circuito que consta de un flip-flop D con su entrada D conectada a la salida Q. ¿Cuál será el valor de Q?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Cuadrada",
            "images": [
              "images/opts/sd2_04_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "El primer flip-flop estará en estado 1 y el segundo en estado 0",
            "images": [
              "images/opts/sd2_04_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Media onda rectificada",
            "images": [
              "images/opts/sd2_04_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Q no cambia",
            "images": [
              "images/opts/sd2_04_D.png"
            ]
          }
        ],
        "answers": [
          "D"
        ],
        "multi": false,
        "explanation": "Si la entrada D se realimenta directamente desde Q, el flip-flop mantiene su estado. Por eso Q no cambia.",
        "explanation_images": []
      },
      {
        "id": "SD2-05",
        "num": 5,
        "text": "¿De qué señales dependen las salidas al mundo exterior de una máquina Moore?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Las entradas y el decodificador de siguiente estado",
            "images": [
              "images/opts/sd2_05_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Las entradas del mundo exterior y el estado en el que está la máquina",
            "images": [
              "images/opts/sd2_05_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Solo del estado en el que está la máquina",
            "images": [
              "images/opts/sd2_05_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Del reloj y las entradas que cambien en un ciclo del reloj",
            "images": [
              "images/opts/sd2_05_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "En una máquina de Moore, las salidas dependen únicamente del estado actual de la máquina, no directamente de las entradas.",
        "explanation_images": []
      },
      {
        "id": "SD2-06",
        "num": 6,
        "text": "¿Qué se debe hacer en un diagrama ASM si en un mismo estado se tiene que preguntar por 2 entradas asincrónicas?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Eliminar un interruptor",
            "images": [
              "images/opts/sd2_06_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Modificar la frecuencia del CLK para que acepte más de 2 entradas asincrónicas",
            "images": [
              "images/opts/sd2_06_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Hay que tener un estado para cada entrada",
            "images": [
              "images/opts/sd2_06_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Limitar siempre la pregunta a 3 entradas",
            "images": [
              "images/opts/sd2_06_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "En el diagrama ASM, si se deben evaluar entradas asincrónicas, se organiza el diseño usando un estado para cada entrada.",
        "explanation_images": []
      },
      {
        "id": "SD2-07",
        "num": 7,
        "text": "¿Cómo se identifica una entrada asincrónica en un diagrama ASM?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "No es necesario identificarla",
            "images": [
              "images/opts/sd2_07_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Hay que tener un estado para cada entrada",
            "images": [
              "images/opts/sd2_07_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Un asterisco en el símbolo de diamante del ASM",
            "images": [
              "images/opts/sd2_07_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Un asterisco en cualquier lugar del ASM",
            "images": [
              "images/opts/sd2_07_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "Una entrada asincrónica se identifica con un asterisco en el símbolo de diamante del ASM.",
        "explanation_images": []
      },
      {
        "id": "SD2-08",
        "num": 8,
        "text": "Si dentro de un process se asigna a una variable el valor de 1, ¿qué valor toma inmediatamente la variable?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "La primera asignación que se le hizo",
            "images": [
              "images/opts/sd2_08_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "La primera y segunda asignaciones",
            "images": [
              "images/opts/sd2_08_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Todas las asignaciones",
            "images": [
              "images/opts/sd2_08_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "1",
            "images": [
              "images/opts/sd2_08_D.png"
            ]
          }
        ],
        "answers": [
          "D"
        ],
        "multi": false,
        "explanation": "En VHDL, una variable dentro de un process toma inmediatamente el valor asignado. Por eso toma el valor 1.",
        "explanation_images": []
      },
      {
        "id": "SD2-09",
        "num": 9,
        "text": "Si dentro de un process se asigna a una señal el valor de 1, ¿qué valor toma inmediatamente la señal antes de terminar el process?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "El valor que tenía antes de realizar la asignación",
            "images": [
              "images/opts/sd2_09_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "La primera y segunda asignaciones",
            "images": [
              "images/opts/sd2_09_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Todas las asignaciones",
            "images": [
              "images/opts/sd2_09_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "1",
            "images": [
              "images/opts/sd2_09_D.png"
            ]
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "En VHDL, una señal no se actualiza inmediatamente dentro del process; conserva el valor anterior hasta finalizar el proceso de actualización.",
        "explanation_images": []
      },
      {
        "id": "SD2-10",
        "num": 10,
        "text": "En un diagrama ASM, ¿qué sentencias se podrían utilizar para implementarlo?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Solo los when else",
            "images": [
              "images/opts/sd2_10_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Solo if",
            "images": [
              "images/opts/sd2_10_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Solo case",
            "images": [
              "images/opts/sd2_10_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Case e if",
            "images": [
              "images/opts/sd2_10_D.png"
            ]
          }
        ],
        "answers": [
          "D"
        ],
        "multi": false,
        "explanation": "Un diagrama ASM se puede implementar usando estructuras case e if, según el estado y las condiciones de decisión.",
        "explanation_images": []
      }
    ]
  },
  {
    "id": "software_para_ingenieria",
    "title": "Software para ingeniería",
    "script": "repaso_software_para_ingenieria.py",
    "questions": [
      {
        "id": "SW-01",
        "num": 1,
        "text": "Un ingeniero en Telecomunicaciones precisa simular interferencia compleja en un canal usando una señal de ruido blanco complejo. ¿Cuál de los siguientes comandos en MATLAB genera correctamente un vector de 1x1000 muestras de ruido complejo aleatorio con media cero y varianza unitaria?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "z = rand(1,1000) + 1i*rand(1,1000);",
            "images": [
              "images/opts/sw_01_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "z = rand(1,1000) + 1i*rand(1,1000);",
            "images": [
              "images/opts/sw_01_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "z = complex(randn(1,1000));",
            "images": [
              "images/opts/sw_01_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "z = 1i*randn(1,1000);",
            "images": [
              "images/opts/sw_01_D.png"
            ]
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "La opción correcta usa randn para generar componentes gaussianas de media cero, una real y otra imaginaria, formando ruido complejo aleatorio.",
        "explanation_images": []
      },
      {
        "id": "SW-02",
        "num": 2,
        "text": "En una simulación de atenuación de señal, se requiere definir una función exponencial decreciente sin crear un archivo de función. ¿Cuál opción representa correctamente una función anónima en MATLAB que modele esta atenuación en el tiempo?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "exp_decay = @(t) exp(t);",
            "images": [
              "images/opts/sw_02_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "exp_decay = @(t) exp(-t);",
            "images": [
              "images/opts/sw_02_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "exp_decay(t) = exp(-t);",
            "images": [
              "images/opts/sw_02_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "function exp_decay(t) = exp(-t);",
            "images": [
              "images/opts/sw_02_D.png"
            ]
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "En MATLAB, una función anónima se define con @(variable). Como la atenuación es decreciente, se usa exp(-t).",
        "explanation_images": []
      },
      {
        "id": "SW-03",
        "num": 3,
        "text": "¿Qué comando MATLAB genera correctamente una señal AM con una portadora de 10 kHz y una señal moduladora de 1 kHz para representar una señal senoidal modulada en amplitud?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "t = 0:1e-6:1; x = sin(2*pi*10000*t).*cos(2*pi*1000*t);",
            "images": [
              "images/opts/sw_03_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "t = 0:1e-6:1; x = sin(2*pi*1000*t + 2*pi*10000*t);",
            "images": [
              "images/opts/sw_03_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "t = 0:1e-6:1; x = sin(2*pi*1000*t).*cos(2*pi*10000*t);",
            "images": [
              "images/opts/sw_03_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "t = 0:1e-6:1; x = cos(2*pi*1000*t).*cos(2*pi*10000*t);",
            "images": [
              "images/opts/sw_03_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "La opción resaltada en el PDF multiplica la señal moduladora de 1 kHz por la portadora de 10 kHz, representando la modulación en amplitud.",
        "explanation_images": []
      },
      {
        "id": "SW-04",
        "num": 4,
        "text": "Encontrar en MATLAB la Transformada Rápida de Fourier y el espectro de frecuencias de la señal: x(t) = 0.2sen(2πt) + 0.4cos(4πt).",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "t = 0:0.001:1; x = 0.2*sin(2*pi*t) + 0.4*cos(4*pi*t); X = fft(x); f = (0:length(X)-1)/length(t); plot(f, abs(X));",
            "images": [
              "images/opts/sw_04_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "t = 0:0.001:1; x = 0.2*sin(2*pi*t) + 0.4*cos(4*pi*t); X = fft(x); f = (0:length(X)-1); plot(f, abs(X));",
            "images": [
              "images/opts/sw_04_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "t = 0:0.001:1; x = 0.2*sin(2*pi*t) + 0.4*cos(4*pi*t); X = fft(x); f = (0:length(X)-1)/length(X); plot(f, abs(X));",
            "images": [
              "images/opts/sw_04_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "t = 0:0.001:1; x = 0.2*sin(2*pi*t) + 0.4*cos(4*pi*t); X = fft(x); f = (0:length(X)-1)/(length(t)*0.001); plot(f, abs(X));",
            "images": [
              "images/opts/sw_04_D.png"
            ]
          }
        ],
        "answers": [
          "D"
        ],
        "multi": false,
        "explanation": "Para obtener el eje de frecuencias en Hz se considera el período de muestreo Ts = 0.001, por eso se usa f = (0:N-1)/(N*Ts).",
        "explanation_images": []
      },
      {
        "id": "SW-05",
        "num": 5,
        "text": "En un sistema de adquisición de señales, se conecta un control tipo Knob en el panel frontal de LabVIEW a una estructura Case en el diagrama de bloques. ¿Qué tipo de control es y qué función desempeña?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Es un control numérico para modificar parámetros en tiempo de ejecución",
            "images": [
              "images/opts/sw_05_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Es un indicador que muestra valores analógicos",
            "images": [
              "images/opts/sw_05_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Es un control de cadena de texto",
            "images": [
              "images/opts/sw_05_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Es un interruptor binario para activar funciones",
            "images": [
              "images/opts/sw_05_D.png"
            ]
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "Un Knob en LabVIEW es un control numérico que permite cambiar parámetros mientras el VI se ejecuta.",
        "explanation_images": []
      },
      {
        "id": "SW-06",
        "num": 6,
        "text": "Un sistema implementado en LabVIEW controla la transmisión de datos en paquetes a través de un canal simulado. Cada paquete debe contener un ID, datos y un chequeo de paridad. ¿Cómo debe diseñarse el sistema utilizando estructuras gráficas en el diagrama de bloques?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Crear un Event Structure con nodos numéricos concatenados y lógica de XOR",
            "images": [
              "images/opts/sw_06_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Usar un While Loop con shift registers para generar ID, un String array para datos, y un SubVI para calcular paridad",
            "images": [
              "images/opts/sw_06_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Utilizar un Flat Sequence que concatene todos los datos y aplique una función seno como verificación",
            "images": [
              "images/opts/sw_06_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Usar nodos DAQ y generar la paridad directamente desde el Front Panel con un botón de control",
            "images": [
              "images/opts/sw_06_D.png"
            ]
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "La opción correcta organiza el proceso con While Loop, shift registers para conservar/actualizar el ID, arreglo de datos y un SubVI para el cálculo de paridad.",
        "explanation_images": []
      },
      {
        "id": "SW-07",
        "num": 7,
        "text": "¿Qué tipo de dato se usa para activar la alarma y cuál función lógica es adecuada para un técnico que diseña un VI que enciende una alarma si la temperatura supera los 70 °C?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Tipo String con función Comparar Texto",
            "images": [
              "images/opts/sw_07_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Tipo Numeric con función Suma",
            "images": [
              "images/opts/sw_07_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Tipo Boolean con función Mayor que",
            "images": [
              "images/opts/sw_07_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Tipo Boolean con función Concatenar",
            "images": [
              "images/opts/sw_07_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "La condición de alarma se evalúa con una comparación Mayor que; el resultado de esa comparación es Boolean y sirve para activar la alarma.",
        "explanation_images": []
      },
      {
        "id": "SW-08",
        "num": 8,
        "text": "Se solicita implementar en LabVIEW una estructura de control que modifique dinámicamente el número de iteraciones de un For Loop en función del valor de entrada de una señal externa, por ejemplo, el número de paquetes recibidos. ¿Qué técnica o estructura se debe emplear para permitir este comportamiento?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Utilizar shift registers con un valor constante de iteración",
            "images": [
              "images/opts/sw_08_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Encapsular el For Loop en una estructura Case según el número de paquetes",
            "images": [
              "images/opts/sw_08_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Colocar el For Loop dentro de un While Loop con condición de parada",
            "images": [
              "images/opts/sw_08_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Crear un For Loop con terminal de iteración conectado dinámicamente a una entrada externa validada",
            "images": [
              "images/opts/sw_08_D.png"
            ]
          }
        ],
        "answers": [
          "D"
        ],
        "multi": false,
        "explanation": "El número de iteraciones del For Loop debe conectarse dinámicamente a una entrada externa validada para que cambie según la señal o cantidad de paquetes.",
        "explanation_images": []
      },
      {
        "id": "SW-09",
        "num": 9,
        "text": "Se diseña una planta de distribución de fibra óptica en AutoCAD, utilizando layouts a escala para documentación técnica. Desea representar diferentes niveles de detalle en distintos viewports de una misma hoja. ¿Cuál es la secuencia correcta de acciones para conseguirlo?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Definir múltiples viewports en Paper Space, asignar escalas individuales y congelar capas según necesidad",
            "images": [
              "images/opts/sw_09_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Activar múltiples viewports en Model Space y ajustar el zoom",
            "images": [
              "images/opts/sw_09_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Crear múltiples layouts y usar el comando REGION para cada uno",
            "images": [
              "images/opts/sw_09_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Insertar bloques dinámicos y modificar sus propiedades desde el tab Annotate",
            "images": [
              "images/opts/sw_09_D.png"
            ]
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "Para diferentes niveles de detalle en una misma hoja se usan viewports en Paper Space, cada uno con su escala y configuración de capas.",
        "explanation_images": []
      },
      {
        "id": "SW-10",
        "num": 10,
        "text": "Durante la elaboración del plano de una red de canalización subterránea para fibra óptica, se requiere trazar una línea central o eje que mantenga equidistancia entre dos ductos curvos. ¿Qué comando permite generar correctamente esta línea, manteniendo precisión geométrica?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "COPY con coordenadas absolutas",
            "images": [
              "images/opts/sw_10_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "OFFSET desde una polilínea, calculando la mitad de la distancia",
            "images": [
              "images/opts/sw_10_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "SPLINE entre puntos de control",
            "images": [
              "images/opts/sw_10_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "TRIM seguido de FILLET para ajustar vértices",
            "images": [
              "images/opts/sw_10_D.png"
            ]
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "OFFSET permite generar una línea paralela o equidistante respecto a una polilínea, manteniendo precisión geométrica.",
        "explanation_images": []
      }
    ]
  },
  {
    "id": "sostenibilidad_ambiental",
    "title": "Sostenibilidad Ambiental",
    "script": "repaso_sostenibilidad_ambiental.py",
    "questions": [
      {
        "id": "SA-01",
        "num": 1,
        "text": "¿Cuál de los siguientes pilares de los Objetivos de Desarrollo Sostenible (ODS) se enfoca en garantizar que las economías sean inclusivas y sostenibles, promoviendo el crecimiento económico sin dejar a nadie atrás?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Prosperidad",
            "images": [
              "images/opts/sost_01_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Personas",
            "images": [
              "images/opts/sost_01_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Planeta",
            "images": [
              "images/opts/sost_01_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Paz",
            "images": [
              "images/opts/sost_01_D.png"
            ]
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "El pilar Prosperidad busca que las economías sean inclusivas y sostenibles, promoviendo el crecimiento económico sin dejar a nadie atrás.",
        "explanation_images": []
      },
      {
        "id": "SA-02",
        "num": 2,
        "text": "¿Cuál de las siguientes afirmaciones describe correctamente uno de los principales mecanismos de mercado introducidos por el Protocolo de Kioto para reducir las emisiones de gases de efecto invernadero entre los países industrializados?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "El Mecanismo de Desarrollo Limpio permite a los países en desarrollo vender sus derechos de emisión a los países industrializados.",
            "images": [
              "images/opts/sost_02_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "El Comercio de emisiones permite a los países desarrollados comprar y vender derechos de emisión para cumplir con sus objetivos de reducción de emisiones.",
            "images": [
              "images/opts/sost_02_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "El Programa de monitoreo y verificación establece un sistema obligatorio para la medición de emisiones de gases en países no firmantes del Protocolo.",
            "images": [
              "images/opts/sost_02_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "La Iniciativa de adaptación permite a los países en desarrollo financiar proyectos de adaptación sin restricciones en el uso de créditos de carbono.",
            "images": [
              "images/opts/sost_02_D.png"
            ]
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "El comercio de emisiones permite que los países desarrollados compren y vendan derechos de emisión para cumplir sus metas de reducción.",
        "explanation_images": []
      },
      {
        "id": "SA-03",
        "num": 3,
        "text": "¿Cuál de los siguientes factores NO está incluido como uno de los límites planetarios establecidos por el estudio de “Los límites del planeta para la humanidad” de 2009?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Cambio climático",
            "images": [
              "images/opts/sost_03_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Acidificación de los océanos",
            "images": [
              "images/opts/sost_03_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Uso del agua dulce",
            "images": [
              "images/opts/sost_03_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Crecimiento de la población mundial",
            "images": [
              "images/opts/sost_03_D.png"
            ]
          }
        ],
        "answers": [
          "D"
        ],
        "multi": false,
        "explanation": "El crecimiento de la población mundial no aparece como uno de los límites planetarios definidos en el estudio de 2009.",
        "explanation_images": []
      },
      {
        "id": "SA-04",
        "num": 4,
        "text": "¿Cuál de los siguientes servicios ecosistémicos desempeñados por el suelo tiene un impacto directo en la purificación del agua y el tratamiento de residuos?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Servicios de regulación",
            "images": [
              "images/opts/sost_04_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Servicios de soporte",
            "images": [
              "images/opts/sost_04_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Servicios culturales",
            "images": [
              "images/opts/sost_04_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Servicios de provisionamiento",
            "images": [
              "images/opts/sost_04_D.png"
            ]
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "La purificación del agua y el tratamiento de residuos forman parte de los servicios de regulación que puede brindar el suelo.",
        "explanation_images": []
      },
      {
        "id": "SA-05",
        "num": 5,
        "text": "¿Cuál de los siguientes contaminantes atmosféricos secundarios se forma principalmente a través de la reacción química entre los óxidos de nitrógeno (NOx) y los compuestos orgánicos volátiles (COVs) en presencia de la luz solar?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Ozono troposférico (O₃)",
            "images": [
              "images/opts/sost_05_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Dióxido de azufre (SO₂)",
            "images": [
              "images/opts/sost_05_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Monóxido de carbono (CO)",
            "images": [
              "images/opts/sost_05_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Material particulado (PM)",
            "images": [
              "images/opts/sost_05_D.png"
            ]
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "El ozono troposférico se forma por reacciones fotoquímicas entre NOx y COVs en presencia de luz solar.",
        "explanation_images": []
      },
      {
        "id": "SA-06",
        "num": 6,
        "text": "¿Cuál de las siguientes afirmaciones describe correctamente una característica distintiva de la contaminación difusa en comparación con la puntual?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "La contaminación difusa proviene de fuentes específicas y localizadas, como las chimeneas de las fábricas.",
            "images": [
              "images/opts/sost_06_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "La contaminación puntual se distribuye de manera uniforme sobre grandes áreas y es difícil de rastrear.",
            "images": [
              "images/opts/sost_06_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "La contaminación difusa se origina en múltiples fuentes dispersas, como el escurrimiento de productos químicos desde extensas áreas agrícolas o urbanas.",
            "images": [
              "images/opts/sost_06_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "La contaminación puntual es más fácil de controlar porque se concentra en áreas amplias y menos identificables.",
            "images": [
              "images/opts/sost_06_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "La contaminación difusa se caracteriza por provenir de múltiples fuentes dispersas, lo que dificulta su rastreo y control.",
        "explanation_images": []
      },
      {
        "id": "SA-07",
        "num": 7,
        "text": "¿Cuál de las siguientes estrategias de gestión de desechos sólidos busca minimizar la cantidad de residuos generados en su origen y es considerada la más efectiva en términos de sostenibilidad ambiental?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Reciclaje y reutilización de materiales",
            "images": [
              "images/opts/sost_07_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Incineración controlada de desechos",
            "images": [
              "images/opts/sost_07_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Reducción en la fuente",
            "images": [
              "images/opts/sost_07_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Disposición en vertederos controlados",
            "images": [
              "images/opts/sost_07_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "La reducción en la fuente es la estrategia más efectiva porque evita o minimiza la generación de residuos desde el origen.",
        "explanation_images": []
      },
      {
        "id": "SA-08",
        "num": 8,
        "text": "¿A qué hace referencia el potencial de calentamiento global (PCG) de un gas de efecto invernadero?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "La capacidad de un gas para reflejar la radiación solar y reducir el calentamiento terrestre.",
            "images": [
              "images/opts/sost_08_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "La cantidad de energía que un gas puede absorber antes de descomponerse en la atmósfera.",
            "images": [
              "images/opts/sost_08_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "La cantidad de radiación infrarroja que un gas puede absorber y emitir, comparado con el dióxido de carbono (CO₂) durante un período determinado.",
            "images": [
              "images/opts/sost_08_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "La rapidez con la que un gas de efecto invernadero se disuelve en el agua de los océanos.",
            "images": [
              "images/opts/sost_08_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "El PCG compara la capacidad de un gas para absorber y emitir radiación infrarroja frente al CO₂ durante un período específico.",
        "explanation_images": []
      },
      {
        "id": "SA-09",
        "num": 9,
        "text": "¿Cuál de los siguientes factores tiene un impacto significativo en la huella de carbono de los productos electrónicos, especialmente en dispositivos como teléfonos móviles y computadoras portátiles?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "La cantidad de energía utilizada durante la fase de uso del dispositivo.",
            "images": [
              "images/opts/sost_09_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "La energía empleada en el proceso de reciclaje de dispositivos al final de su vida útil.",
            "images": [
              "images/opts/sost_09_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Las emisiones asociadas con la extracción y procesamiento de minerales como el litio y el cobalto utilizados en las baterías.",
            "images": [
              "images/opts/sost_09_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "El empaquetado y transporte del producto al consumidor final.",
            "images": [
              "images/opts/sost_09_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "En dispositivos electrónicos, la extracción y procesamiento de minerales como litio y cobalto puede aportar de forma importante a la huella de carbono.",
        "explanation_images": []
      },
      {
        "id": "SA-10",
        "num": 10,
        "text": "¿Qué significa el acrónimo CRETIB en el contexto de la clasificación de residuos peligrosos, y por qué estos materiales requieren un manejo especial?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "CRETIB hace referencia a residuos que son principalmente inofensivos para el medio ambiente y la salud humana, ya que se consideran biodegradables.",
            "images": [
              "images/opts/sost_10_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "CRETIB es un acrónimo que describe residuos con propiedades corrosivas, reactivas, explosivas, tóxicas, infecciosas y biológicas, los cuales son peligrosos y requieren un manejo y disposición especial para evitar daños a la salud y al medio ambiente.",
            "images": [
              "images/opts/sost_10_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "CRETIB es una clasificación de residuos que se refiere a los materiales reciclables de bajo impacto ambiental, como papel y vidrio.",
            "images": [
              "images/opts/sost_10_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "CRETIB describe residuos sólidos orgánicos que son fáciles de tratar y compostar sin ningún riesgo de contaminación.",
            "images": [
              "images/opts/sost_10_D.png"
            ]
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "CRETIB identifica residuos con características corrosivas, reactivas, explosivas, tóxicas, infecciosas y biológicas; por eso requieren manejo especial.",
        "explanation_images": []
      }
    ]
  },
  {
    "id": "television_digital",
    "title": "Televisión Digital",
    "script": "repaso_television_digital.py",
    "questions": [
      {
        "id": "TV-01",
        "num": 1,
        "text": "¿Cuáles son los modos de operación de DVB-T?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Modo FFT 2K",
            "images": [
              "images/opts/tv_01_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Modo FFT 4K",
            "images": [
              "images/opts/tv_01_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Modo FFT 6 K",
            "images": [
              "images/opts/tv_01_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Modo FFT 16K",
            "images": [
              "images/opts/tv_01_D.png"
            ]
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "Según la clave del cuestionario, el modo de operación señalado para DVB-T es Modo FFT 4K.",
        "explanation_images": []
      },
      {
        "id": "TV-02",
        "num": 2,
        "text": "¿Qué sucede al incrementar el modo de operación de un sistema DVB-T2?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Genera caída abrupta fuera de banda",
            "images": [
              "images/opts/tv_02_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Genera caída abrupta dentro de banda",
            "images": [
              "images/opts/tv_02_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Genera tiempos de símbolo más cortos",
            "images": [
              "images/opts/tv_02_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Genera una menor resolución en frecuencia",
            "images": [
              "images/opts/tv_02_D.png"
            ]
          }
        ],
        "answers": [
          "D"
        ],
        "multi": false,
        "explanation": "La opción resaltada en el cuestionario indica que al incrementar el modo de operación se genera una menor resolución en frecuencia.",
        "explanation_images": []
      },
      {
        "id": "TV-03",
        "num": 3,
        "text": "¿Cuál es el proceso para la sintonización de un canal para ISDB-T con el equipo PROMAX?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Pulsación de S, T; Pulsación corta de A, D; Pulsación botón ingresar la frecuencia; Mostrar video en pantalla",
            "images": [
              "images/opts/tv_03_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Pulsación de S, T; Pulsación larga de A, D; Pulsación botón ingresar el tiempo; Mostrar video en pantalla",
            "images": [
              "images/opts/tv_03_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Pulsación de S, T; Pulsación corta de A, D; Pulsación botón ingresar el tiempo; Mostrar video en pantalla",
            "images": [
              "images/opts/tv_03_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Pulsación de S, T; Pulsación larga de A, D; Pulsación botón ingresar la frecuencia; Mostrar video en pantalla",
            "images": [
              "images/opts/tv_03_D.png"
            ]
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "El proceso correcto combina la pulsación de S y T, pulsación corta de A y D, ingreso de la frecuencia y visualización del video en pantalla.",
        "explanation_images": []
      },
      {
        "id": "TV-04",
        "num": 4,
        "text": "¿Cuáles son las características principales de una señal ISDB-Tb?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Modulación OFDM",
            "images": [
              "images/opts/tv_04_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Modos de operación 2k, 4k, 6k, 8k",
            "images": [
              "images/opts/tv_04_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Pensada para canales de 5 MHz",
            "images": [
              "images/opts/tv_04_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Utiliza portadoras piloto para estimación del canal",
            "images": [
              "images/opts/tv_04_D.png"
            ]
          }
        ],
        "answers": [
          "A",
          "D"
        ],
        "multi": true,
        "explanation": "El cuestionario marca dos características principales: modulación OFDM y uso de portadoras piloto para estimación del canal.",
        "explanation_images": []
      },
      {
        "id": "TV-05",
        "num": 5,
        "text": "El uso de FFT más altas, por ejemplo 8K, permite:",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Eliminar la propagación multicamino",
            "images": [
              "images/opts/tv_05_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Mejorar la recepción fija",
            "images": [
              "images/opts/tv_05_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Mejora la recepción en interiores",
            "images": [
              "images/opts/tv_05_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Ninguna de las anteriores",
            "images": [
              "images/opts/tv_05_D.png"
            ]
          },
          {
            "letter": "E",
            "text": "Todas las anteriores",
            "images": [
              "images/opts/tv_05_E.png"
            ]
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "La opción resaltada indica que el uso de FFT más altas, como 8K, permite mejorar la recepción fija.",
        "explanation_images": []
      },
      {
        "id": "TV-06",
        "num": 6,
        "text": "El entrelazado temporal es útil para:",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Dar mayor separación entre las portadoras OFDM",
            "images": [
              "images/opts/tv_06_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Afrontar los desvanecimientos controlados del canal",
            "images": [
              "images/opts/tv_06_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Recepción móvil (indoor outdoor)",
            "images": [
              "images/opts/tv_06_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Ninguna es correcta",
            "images": [
              "images/opts/tv_06_D.png"
            ]
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "El entrelazado temporal ayuda a afrontar los desvanecimientos del canal.",
        "explanation_images": []
      },
      {
        "id": "TV-07",
        "num": 7,
        "text": "El entrelazado frecuencial consiste en:",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Cambiar las posiciones de las portadoras.",
            "images": [
              "images/opts/tv_07_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Distribuir los datos en varias portadoras no contiguas en frecuencia.",
            "images": [
              "images/opts/tv_07_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Utilizar menos portadoras que las definidas para el modo específico que se usa.",
            "images": [
              "images/opts/tv_07_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Todas las anteriores son correctas",
            "images": [
              "images/opts/tv_07_D.png"
            ]
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "El entrelazado frecuencial distribuye los datos en varias portadoras no contiguas en frecuencia.",
        "explanation_images": []
      },
      {
        "id": "TV-08",
        "num": 8,
        "text": "El estándar ISDB-Tb utiliza codificación de video:",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "MPEG-2",
            "images": [
              "images/opts/tv_08_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "MPEG-5",
            "images": [
              "images/opts/tv_08_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "MPEG-4",
            "images": [
              "images/opts/tv_08_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Ninguna de las anteriores",
            "images": [
              "images/opts/tv_08_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "El estándar ISDB-Tb utiliza codificación de video MPEG-4.",
        "explanation_images": []
      },
      {
        "id": "TV-09",
        "num": 9,
        "text": "¿A qué se refieren las siglas IPTV?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "IPTV un protocolo en sí mismo.",
            "images": [
              "images/opts/tv_09_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "IPTV es una tecnología que permite transmisión de señales de video sobre protocolo IP.",
            "images": [
              "images/opts/tv_09_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "IPTV es televisión sobre Internet.",
            "images": [
              "images/opts/tv_09_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "IPTV es una tecnología que se despliega sobre redes propietarias de operadores que pretenden ofrecer servicios de televisión por subscripción distinta a los satelitales y CATV y algunos servicios innovadores e interactivos.",
            "images": [
              "images/opts/tv_09_D.png"
            ]
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "IPTV se refiere a una tecnología que permite la transmisión de señales de video sobre protocolo IP.",
        "explanation_images": []
      },
      {
        "id": "TV-10",
        "num": 10,
        "text": "¿Cuáles son los componentes de una solución IPTV a nivel de la capa de transporte?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Contiene encoders (MPEG-2, MPEG-4 o Windows Media), middleware, servidores de video en demanda.",
            "images": [
              "images/opts/tv_10_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Redes IP/MPLS con QoS, grandes anchos de banda (DWDM, Metroethernet).",
            "images": [
              "images/opts/tv_10_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "ADSL, VDSL, PON (FTTx).",
            "images": [
              "images/opts/tv_10_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Set Top Box.",
            "images": [
              "images/opts/tv_10_D.png"
            ]
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "A nivel de la capa de transporte, la solución IPTV se apoya en redes IP/MPLS con QoS y grandes anchos de banda.",
        "explanation_images": []
      }
    ]
  },
  {
    "id": "trabajo_de_integracion_curricular",
    "title": "Trabajo de Integración Curricular",
    "script": "repaso_trabajo_de_integracion_curricular.py",
    "questions": [
      {
        "id": "TIC-01",
        "num": 1,
        "text": "Enumerar los elementos que deben ser tomados en cuenta para escribir un objetivo específico.",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "El cómo y para qué es lo más importante",
            "images": [
              "images/opts/tic_01_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Solo el verbo en infinitivo",
            "images": [
              "images/opts/tic_01_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Hay que redactar solo en forma que sea comprensible.",
            "images": [
              "images/opts/tic_01_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "El verbo en infinitivo, el que, el cómo, el para qué.",
            "images": [
              "images/opts/tic_01_D.png"
            ]
          }
        ],
        "answers": [
          "D"
        ],
        "multi": false,
        "explanation": "Para redactar un objetivo específico se consideran el verbo en infinitivo, el qué, el cómo y el para qué.",
        "explanation_images": []
      },
      {
        "id": "TIC-02",
        "num": 2,
        "text": "Identificar qué es la bibliografía.",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Una opinión con fundamento.",
            "images": [
              "images/opts/tic_02_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Un resultado comprobado",
            "images": [
              "images/opts/tic_02_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Una explicación probable y comprobable del fenómeno.",
            "images": [
              "images/opts/tic_02_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Ninguna de las anteriores.",
            "images": [
              "images/opts/tic_02_D.png"
            ]
          }
        ],
        "answers": [
          "D"
        ],
        "multi": false,
        "explanation": "La bibliografía corresponde a las fuentes consultadas, por eso ninguna de las opciones A, B o C define correctamente el concepto.",
        "explanation_images": []
      },
      {
        "id": "TIC-03",
        "num": 3,
        "text": "Identificar qué es la población.",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Se enfoca en experiencias personales.",
            "images": [
              "images/opts/tic_03_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Usa entrevistas abiertas.",
            "images": [
              "images/opts/tic_03_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Conjunto total de individuos, elementos, eventos o datos que comparten una o más características comunes.",
            "images": [
              "images/opts/tic_03_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Utiliza relatos subjetivos.",
            "images": [
              "images/opts/tic_03_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "En investigación, la población es el conjunto total de individuos, elementos, eventos o datos que comparten características comunes.",
        "explanation_images": []
      },
      {
        "id": "TIC-04",
        "num": 4,
        "text": "Identificar cuál de las siguientes afirmaciones corresponde a las conclusiones.",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Permite crear nuevos experimentos.",
            "images": [
              "images/opts/tic_04_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Copia de estudios anteriores.",
            "images": [
              "images/opts/tic_04_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Refuerzan los objetivos específicos y son datos propios.",
            "images": [
              "images/opts/tic_04_C.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "Las conclusiones deben relacionarse con los objetivos específicos y apoyarse en los resultados propios del trabajo.",
        "explanation_images": []
      },
      {
        "id": "TIC-05",
        "num": 5,
        "text": "Enumerar lo que se especifica en el cronograma.",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Un grupo de comparación.",
            "images": [
              "images/opts/tic_05_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Las observaciones.",
            "images": [
              "images/opts/tic_05_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "La organización, el orden y el tiempo.",
            "images": [
              "images/opts/tic_05_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Solo lo que se hace en laboratorios profesionales.",
            "images": [
              "images/opts/tic_05_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "El cronograma organiza las actividades, su orden y el tiempo previsto para desarrollarlas.",
        "explanation_images": []
      },
      {
        "id": "TIC-06",
        "num": 6,
        "text": "¿Qué parte del informe de investigación presenta los resultados obtenidos?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Introducción.",
            "images": [
              "images/opts/tic_06_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Metodología.",
            "images": [
              "images/opts/tic_06_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Resultados.",
            "images": [
              "images/opts/tic_06_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Justificación.",
            "images": [
              "images/opts/tic_06_D.png"
            ]
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "La sección de resultados presenta los datos y hallazgos obtenidos durante la investigación.",
        "explanation_images": []
      },
      {
        "id": "TIC-07",
        "num": 7,
        "text": "Identificar qué define el glosario.",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Cualitativa nominal.",
            "images": [
              "images/opts/tic_07_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Cualitativa ordinal.",
            "images": [
              "images/opts/tic_07_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Cuantitativa discreta.",
            "images": [
              "images/opts/tic_07_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Lista de términos o palabras especializadas.",
            "images": [
              "images/opts/tic_07_D.png"
            ]
          }
        ],
        "answers": [
          "D"
        ],
        "multi": false,
        "explanation": "El glosario es una lista de términos o palabras especializadas utilizadas en el trabajo.",
        "explanation_images": []
      },
      {
        "id": "TIC-08",
        "num": 8,
        "text": "Identificar tres recursos que deben estar en el trabajo de investigación.",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Bibliográficos.",
            "images": [
              "images/opts/tic_08_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Materiales físicos y digitales.",
            "images": [
              "images/opts/tic_08_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Humanos.",
            "images": [
              "images/opts/tic_08_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Todos los anteriores.",
            "images": [
              "images/opts/tic_08_D.png"
            ]
          }
        ],
        "answers": [
          "D"
        ],
        "multi": false,
        "explanation": "Un trabajo de investigación puede requerir recursos bibliográficos, materiales físicos y digitales, y recursos humanos.",
        "explanation_images": []
      },
      {
        "id": "TIC-09",
        "num": 9,
        "text": "Identificar cuál de los siguientes verbos se podría usar para escribir una conclusión.",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Analizando.",
            "images": [
              "images/opts/tic_09_A.png"
            ]
          },
          {
            "letter": "B",
            "text": "Escribiendo.",
            "images": [
              "images/opts/tic_09_B.png"
            ]
          },
          {
            "letter": "C",
            "text": "Diseñando.",
            "images": [
              "images/opts/tic_09_C.png"
            ]
          },
          {
            "letter": "D",
            "text": "Estudiar.",
            "images": [
              "images/opts/tic_09_D.png"
            ]
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "La opción resaltada en el cuestionario es “analizando”, por eso es la respuesta correcta.",
        "explanation_images": []
      }
    ]
  },
  {
    "id": "comunicaciones_moviles",
    "title": "Comunicaciones Moviles",
    "script": "repaso_comunicaciones_moviles.py",
    "questions": [
      {
        "id": "MOV-01",
        "num": 1,
        "text": "¿Cuál es una ventaja clave del acceso múltiple por división en código (CDMA) en comparación con FDMA y TDMA?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Mayor necesidad de sincronización",
            "images": []
          },
          {
            "letter": "B",
            "text": "Mayor sensibilidad al efecto de multicamino",
            "images": []
          },
          {
            "letter": "C",
            "text": "Alta eficiencia espectral y tolerancia a desvanecimientos",
            "images": []
          },
          {
            "letter": "D",
            "text": "Uso exclusivo en sistemas satelitales",
            "images": []
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "CDMA: alta eficiencia espectral y tolerancia a desvanecimientos.",
        "explanation_images": []
      },
      {
        "id": "MOV-02",
        "num": 2,
        "text": "¿Cuál es la función principal del componente SGSN dentro de la arquitectura GPRS?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Gestionar los recursos del canal de voz",
            "images": []
          },
          {
            "letter": "B",
            "text": "Facilitar la conexión entre redes fijas e IP",
            "images": []
          },
          {
            "letter": "C",
            "text": "Controlar la transmisión de paquetes por la red de acceso",
            "images": []
          },
          {
            "letter": "D",
            "text": "Gestionar la movilidad y transmisión de datos de usuarios GPRS",
            "images": []
          }
        ],
        "answers": [
          "D"
        ],
        "multi": false,
        "explanation": "SGSN gestiona movilidad y datos en GPRS.",
        "explanation_images": []
      },
      {
        "id": "MOV-03",
        "num": 3,
        "text": "¿Cuál es la principal mejora técnica de EDGE sobre GPRS para incrementar la tasa de transmisión?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Uso de ranuras adicionales en TDMA",
            "images": []
          },
          {
            "letter": "B",
            "text": "Migración a redes todo IP",
            "images": []
          },
          {
            "letter": "C",
            "text": "Implementación de modulación 8PSK",
            "images": []
          },
          {
            "letter": "D",
            "text": "Reducción de la señal de sincronización",
            "images": []
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "EDGE aumenta tasa usando modulación 8PSK.",
        "explanation_images": []
      },
      {
        "id": "MOV-04",
        "num": 4,
        "text": "En el sistema UMTS, ¿qué característica fundamental permite el soporte de servicios multimedios y mayor capacidad?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Acceso por división en frecuencia",
            "images": []
          },
          {
            "letter": "B",
            "text": "Arquitectura basada en conmutación de circuitos",
            "images": []
          },
          {
            "letter": "C",
            "text": "Uso de CDMA de banda ancha (W-CDMA)",
            "images": []
          },
          {
            "letter": "D",
            "text": "Separación física de las capas OS",
            "images": []
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "UMTS usa W-CDMA.",
        "explanation_images": []
      },
      {
        "id": "MOV-05",
        "num": 5,
        "text": "¿Cuál es la finalidad del Inter-Cell Interference Coordination (ICIC) en redes LTE?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Mejorar la capacidad en zonas rurales",
            "images": []
          },
          {
            "letter": "B",
            "text": "Reducir la interferencia en el borde de celda",
            "images": []
          },
          {
            "letter": "C",
            "text": "Optimizar el direccionamiento IP",
            "images": []
          },
          {
            "letter": "D",
            "text": "Aumentar el número de slots disponibles",
            "images": []
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "ICIC reduce interferencia en el borde de celda.",
        "explanation_images": []
      },
      {
        "id": "MOV-06",
        "num": 6,
        "text": "¿Cuál es una ventaja del modelo de Walfisch-Bertoni respecto al modelo de Okumura-Hata en entornos urbanos densos?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Bajo coste computacional",
            "images": []
          },
          {
            "letter": "B",
            "text": "Considera la difracción por edificios",
            "images": []
          },
          {
            "letter": "C",
            "text": "Precisión en zonas suburbanas",
            "images": []
          },
          {
            "letter": "D",
            "text": "Incluye pérdidas por ionosfera",
            "images": []
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "Walfisch-Bertoni modela difracción por edificios en urbano denso.",
        "explanation_images": []
      },
      {
        "id": "MOV-07",
        "num": 7,
        "text": "¿Qué variable es determinante para definir el ancho de banda de coherencia en un canal móvil?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Frecuencia central de transmisión",
            "images": []
          },
          {
            "letter": "B",
            "text": "Variación de fase en el tiempo",
            "images": []
          },
          {
            "letter": "C",
            "text": "Tipo de codificación de canal",
            "images": []
          },
          {
            "letter": "D",
            "text": "Dispersión temporal (delay spread)",
            "images": []
          }
        ],
        "answers": [
          "D"
        ],
        "multi": false,
        "explanation": "El coherence bandwidth depende del delay spread.",
        "explanation_images": []
      },
      {
        "id": "MOV-08",
        "num": 8,
        "text": "En un cálculo de presupuesto de enlace LTE, ¿qué componente representa las pérdidas máximas permitidas del canal entre UE y eNodeB?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Throughput teórico",
            "images": []
          },
          {
            "letter": "B",
            "text": "Shannon Capacity",
            "images": []
          },
          {
            "letter": "C",
            "text": "MAPL (Maximum Allowable Path Loss)",
            "images": []
          },
          {
            "letter": "D",
            "text": "Inter Site Distance (ISD)",
            "images": []
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "MAPL: máxima pérdida de trayecto permitida.",
        "explanation_images": []
      },
      {
        "id": "MOV-09",
        "num": 9,
        "text": "¿Cuál de las siguientes características define a 5G NR en su capa física?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "OFDM flexible con múltiples numerologías",
            "images": []
          },
          {
            "letter": "B",
            "text": "Subportadoras de ancho fijo de 15 kHz",
            "images": []
          },
          {
            "letter": "C",
            "text": "Uso exclusivo de FDD",
            "images": []
          },
          {
            "letter": "D",
            "text": "Solo es compatible con bandas por debajo de 6 GHz",
            "images": []
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "5G NR: OFDM flexible con múltiples numerologías.",
        "explanation_images": []
      },
      {
        "id": "MOV-10",
        "num": 10,
        "text": "¿Cuál de los siguientes modelos está orientado específicamente para caracterizar canales en bandas milimétricas en escenarios urbanos microcelulares?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "COST 231-Hata",
            "images": []
          },
          {
            "letter": "B",
            "text": "Sakagami Extendido",
            "images": []
          },
          {
            "letter": "C",
            "text": "NYUSIM UMi",
            "images": []
          },
          {
            "letter": "D",
            "text": "Ericsson 9999",
            "images": []
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "NYUSIM UMi: mmWave urbano microcelular.",
        "explanation_images": []
      }
    ]
  },
  {
    "id": "comunicaciones_opticas",
    "title": "Comunicaciones Opticas",
    "script": "repaso_comunicaciones_opticas.py",
    "questions": [
      {
        "id": "OPT-01",
        "num": 1,
        "text": "¿Cuál es la función principal de una fibra óptica monomodo?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Transmitir múltiples modos de luz simultáneamente",
            "images": []
          },
          {
            "letter": "B",
            "text": "Aumentar la dispersión modal",
            "images": []
          },
          {
            "letter": "C",
            "text": "Reducir la atenuación y permitir transmisiones a larga distancia",
            "images": []
          },
          {
            "letter": "D",
            "text": "Reflejar las señales ópticas para análisis espectral",
            "images": []
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "Monomodo: reduce dispersión modal y permite largas distancias.",
        "explanation_images": []
      },
      {
        "id": "OPT-02",
        "num": 2,
        "text": "¿Qué componente convierte señales eléctricas en señales ópticas en un sistema de comunicaciones ópticas?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Receptor óptico",
            "images": []
          },
          {
            "letter": "B",
            "text": "Amplificador óptico.",
            "images": []
          },
          {
            "letter": "C",
            "text": "Fuente láser o LED",
            "images": []
          },
          {
            "letter": "D",
            "text": "Divisor óptico",
            "images": []
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "Láser/LED convierte señales eléctricas a ópticas.",
        "explanation_images": []
      },
      {
        "id": "OPT-03",
        "num": 3,
        "text": "¿Qué característica mejora la eficiencia de transmisión en fibras ópticas?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Mayor índice de refracción del núcleo",
            "images": []
          },
          {
            "letter": "B",
            "text": "Menor índice de absorción del recubrimiento",
            "images": []
          },
          {
            "letter": "C",
            "text": "Alta pureza del vidrio y precisión en el núcleo",
            "images": []
          },
          {
            "letter": "D",
            "text": "Uso de conectores metálicos",
            "images": []
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "Alta pureza y precisión del núcleo reduce pérdidas.",
        "explanation_images": []
      },
      {
        "id": "OPT-04",
        "num": 4,
        "text": "¿Qué propiedad del núcleo de una fibra óptica permite la propagación de la luz por reflexión interna total?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Su baja absorción térmica",
            "images": []
          },
          {
            "letter": "B",
            "text": "Su índice de refracción más alto que el del revestimiento",
            "images": []
          },
          {
            "letter": "C",
            "text": "Su geometría cilíndrica",
            "images": []
          },
          {
            "letter": "D",
            "text": "Su resistencia mecánica",
            "images": []
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "Reflexión interna total requiere n_núcleo > n_revestimiento.",
        "explanation_images": []
      },
      {
        "id": "OPT-05",
        "num": 5,
        "text": "¿Cuál es el propósito de utilizar amplificadores ópticos en enlaces de larga distancia?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Reducir la dispersión cromática",
            "images": []
          },
          {
            "letter": "B",
            "text": "Disminuir la interferencia electromagnética",
            "images": []
          },
          {
            "letter": "C",
            "text": "Reforzar la señal sin necesidad de conversión eléctrica",
            "images": []
          },
          {
            "letter": "D",
            "text": "Multiplexar señales ópticas",
            "images": []
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "Amplificación óptica sin conversión eléctrica.",
        "explanation_images": []
      },
      {
        "id": "OPT-06",
        "num": 6,
        "text": "¿Qué fenómeno limita la velocidad de transmisión en fibras multimodo?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Dispersión por polarización",
            "images": []
          },
          {
            "letter": "B",
            "text": "Dispersión modal",
            "images": []
          },
          {
            "letter": "C",
            "text": "Dispersión cromática",
            "images": []
          },
          {
            "letter": "D",
            "text": "Atenuación por absorción",
            "images": []
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "Multimodo limitado por dispersión modal.",
        "explanation_images": []
      },
      {
        "id": "OPT-07",
        "num": 7,
        "text": "¿Qué parámetro caracteriza la eficiencia con la que una fibra óptica transporta energía óptica?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Índice de atenuación",
            "images": []
          },
          {
            "letter": "B",
            "text": "Índice de refracción",
            "images": []
          },
          {
            "letter": "C",
            "text": "Longitud de onda",
            "images": []
          },
          {
            "letter": "D",
            "text": "Ángulo de aceptación",
            "images": []
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "La eficiencia de transporte en una fibra se caracteriza por su atenuación (pérdida en dB/km). La NA/ángulo de aceptación describe acoplamiento de entrada, no la pérdida durante el trayecto.",
        "explanation_images": []
      },
      {
        "id": "OPT-08",
        "num": 8,
        "text": "¿Qué elemento se utiliza para dividir o combinar señales ópticas en una red de distribución óptica pasiva (PON)?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Filtro óptico",
            "images": []
          },
          {
            "letter": "B",
            "text": "Láser de bombeo",
            "images": []
          },
          {
            "letter": "C",
            "text": "Divisor óptico (splitter)",
            "images": []
          },
          {
            "letter": "D",
            "text": "Modulador óptico",
            "images": []
          }
        ],
        "answers": [
          "C"
        ],
        "multi": false,
        "explanation": "Splitter divide/combina señales en PON.",
        "explanation_images": []
      },
      {
        "id": "OPT-09",
        "num": 9,
        "text": "¿Qué técnica permite aumentar la capacidad de transmisión de una sola fibra óptica usando diferentes colores de luz?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Modulación por amplitud",
            "images": []
          },
          {
            "letter": "B",
            "text": "Multiplexación por división de longitud de onda (WDM)",
            "images": []
          },
          {
            "letter": "C",
            "text": "Modulación por frecuencia",
            "images": []
          },
          {
            "letter": "D",
            "text": "Amplificación óptica",
            "images": []
          }
        ],
        "answers": [
          "B"
        ],
        "multi": false,
        "explanation": "WDM usa diferentes longitudes de onda (colores).",
        "explanation_images": []
      },
      {
        "id": "OPT-10",
        "num": 10,
        "text": "¿Qué función cumple un receptor óptico en un sistema de comunicaciones ópticas?",
        "images": [],
        "options": [
          {
            "letter": "A",
            "text": "Convertir la señal óptica en una señal eléctrica",
            "images": []
          },
          {
            "letter": "B",
            "text": "Multiplexar varias señales ópticas",
            "images": []
          },
          {
            "letter": "C",
            "text": "Amplificar la señal óptica entrante",
            "images": []
          },
          {
            "letter": "D",
            "text": "Filtrar señales de interferencia",
            "images": []
          }
        ],
        "answers": [
          "A"
        ],
        "multi": false,
        "explanation": "Receptor óptico convierte señal óptica en eléctrica.",
        "explanation_images": []
      }
    ]
  }
];
