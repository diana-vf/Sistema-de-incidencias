<!DOCTYPE html>
<html>
<head>
<title>Reportes</title>
<link rel="stylesheet" href="style.css">
</head>

<body>

<nav>
<a href="index.html">Registro</a>
<a href="consulta.html">Consultar</a>
<a href="reportes.html">Reportes</a>
</nav>

<div class="container">

<h2>Reportes</h2>

<p id="total"></p>
<p id="estudiantes"></p>
<p id="externos"></p>

<h3>Buscar incidencias por fecha</h3>

<input type="date" id="fechaBuscar">
<button onclick="buscarFecha()">Buscar</button>

<p id="resultadoFecha"></p>

<br>

<button onclick="window.print()">Imprimir reporte</button>

</div>

<script src="script.js"></script>

</body>
</html>
