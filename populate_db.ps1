
# 1. Create Especialidad
$espBody = @{ nombreEspecialidad = "General" } | ConvertTo-Json
Invoke-RestMethod -Uri "http://localhost:8080/api/especialidades" -Method Post -Body $espBody -ContentType "application/json"

# 2. Create Doctors
$docs = @(
    @{ nombre="Gregory"; apellido="House"; numeroLicencia="DOC-001"; especialidad=@{ idEspecialidad=1 } },
    @{ nombre="Stephen"; apellido="Strange"; numeroLicencia="DOC-002"; especialidad=@{ idEspecialidad=1 } },
    @{ nombre="Meredith"; apellido="Grey"; numeroLicencia="DOC-003"; especialidad=@{ idEspecialidad=1 } }
)

foreach ($d in $docs) {
    $body = $d | ConvertTo-Json -Depth 3
    try {
        Invoke-RestMethod -Uri "http://localhost:8080/api/doctores" -Method Post -Body $body -ContentType "application/json"
    } catch {
        Write-Host "Error creating doctor $($d.nombre): $_"
    }
}

# 3. Create Pacientes
$pacs = @(
    @{ nombre="John"; apellido="Doe"; numeroIdentificacion="001" },
    @{ nombre="Jane"; apellido="Smith"; numeroIdentificacion="002" },
    @{ nombre="Pepito"; apellido="Perez"; numeroIdentificacion="003" }
)

foreach ($p in $pacs) {
    try {
        $body = $p | ConvertTo-Json
        Invoke-RestMethod -Uri "http://localhost:8080/api/pacientes" -Method Post -Body $body -ContentType "application/json"
    } catch {
        Write-Host "Error creating paciente $($p.nombre): $_"
    }
}

Write-Host "Database populated!"
