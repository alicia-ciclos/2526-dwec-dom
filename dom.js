const clientes = [
  {
    "nombre": "Carlos",
    "apellidos": "Gómez Pérez",
    "email": "carlos.gomez@email.com"
  },
  {
    "nombre": "Laura",
    "apellidos": "Martínez Sánchez",
    "email": "laura.martinez@email.com"
  },
  {
    "nombre": "Antonio",
    "apellidos": "López Fernández",
    "email": "antonio.lopez@email.com"
  },
  {
    "nombre": "Marta",
    "apellidos": "García Rodríguez",
    "email": "marta.garcia@email.com"
  },
  {
    "nombre": "José",
    "apellidos": "Hernández Ruiz",
    "email": "jose.hernandez@email.com"
  },
  {
    "nombre": "Pedro",
    "apellidos": "Sánchez Martín",
    "email": "pedro.sanchez@email.com"
  },
  {
    "nombre": "Ana",
    "apellidos": "Pérez Jiménez",
    "email": "ana.perez@email.com"
  },
  {
    "nombre": "Luis",
    "apellidos": "Vázquez Gómez",
    "email": "luis.vazquez@email.com"
  },
  {
    "nombre": "Sofía",
    "apellidos": "Rodríguez Torres",
    "email": "sofia.rodriguez@email.com"
  },
  {
    "nombre": "David",
    "apellidos": "Moreno Romero",
    "email": "david.moreno@email.com"
  },
  {
    "nombre": "Isabel",
    "apellidos": "Torres Ruiz",
    "email": "isabel.torres@email.com"
  },
  {
    "nombre": "Ricardo",
    "apellidos": "Álvarez García",
    "email": "ricardo.alvarez@email.com"
  },
  {
    "nombre": "Carmen",
    "apellidos": "Muñoz Pérez",
    "email": "carmen.munoz@email.com"
  },
  {
    "nombre": "Javier",
    "apellidos": "Fernández López",
    "email": "javier.fernandez@email.com"
  },
  {
    "nombre": "Elena",
    "apellidos": "Serrano Martínez",
    "email": "elena.serrano@email.com"
  },
  {
    "nombre": "Francisco",
    "apellidos": "Romero Sánchez",
    "email": "francisco.romero@email.com"
  },
  {
    "nombre": "Raquel",
    "apellidos": "Castro López",
    "email": "raquel.castro@email.com"
  },
  {
    "nombre": "Ricardo",
    "apellidos": "Gutiérrez Molina",
    "email": "ricardo.gutierrez@email.com"
  },
  {
    "nombre": "Pablo",
    "apellidos": "Jiménez Sánchez",
    "email": "pablo.jimenez@email.com"
  },
  {
    "nombre": "Sandra",
    "apellidos": "Vega Ruiz",
    "email": "sandra.vega@email.com"
  }
]

const tabla = document.createElement('table')
const thead = document.createElement('thead')
const tbody = document.createElement('tbody')

const theadtr = document.createElement('tr')
// const th1 = document.createElement('th')
// const th2 = document.createElement('th')
// const th3 = document.createElement('th')

// th1.textContent = 'Nombre'
// th2.textContent = 'Apellidos'
// th3.textContent = 'Email'

// theadtr.appendChild(th1)
// theadtr.appendChild(th2)
// theadtr.appendChild(th3)

const cabeceras = ['Nombre', 'Apellidos', 'Email']
for(let cabecera of cabeceras) {
  const th = document.createElement('th')
  th.textContent = cabecera
  theadtr.appendChild(th)
}

// ['Nombre', 'Apellidos', 'Email'].foreach(cabecera => {
//   const th = document.createElement('th')
//   th.textContent = cabecera
//   theadtr.appendChild(th)
// })

thead.appendChild(theadtr)
tabla.appendChild(thead)

for(let cliente of clientes) {
  const tr = document.createElement('tr')

  // const nombre = document.createElement('td')
  // const apellidos = document.createElement('td')
  // const email = document.createElement('td')

  // nombre.textContent = cliente.nombre
  // apellidos.textContent = cliente.apellidos
  // email.textContent = cliente.email

  // tr.appendChild(nombre)
  // tr.appendChild(apellidos)
  // tr.appendChild(email)

  for(let clave in cliente) {
    const dato = document.createElement('td')
    dato.textContent = cliente[clave]
    tr.appendChild(dato)
  }
  
  tbody.appendChild(tr)
}

tabla.appendChild(tbody)
document.getElementById('principal').appendChild(tabla)