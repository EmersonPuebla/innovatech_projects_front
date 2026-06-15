import {
  GearIcon,
  BackpackIcon,
  PersonIcon,
  EyeOpenIcon,
  SunIcon,
  MoonIcon,
} from "@radix-ui/react-icons";
import {
  Button,
  Dialog,
  Flex,
  Select,
  Grid,
  Box,
  Text,
  Heading,
  VisuallyHidden,
  Tooltip,
} from "@radix-ui/themes";
import { useState } from "react";

interface TabItem {
  id: "general" | "cuenta" | "apariencia";
  label: string;
  icon: React.ReactNode;
}

const SIDEBAR_TABS: TabItem[] = [
  { id: "general", label: "General", icon: <BackpackIcon /> },
  { id: "cuenta", label: "Cuenta", icon: <PersonIcon /> },
  { id: "apariencia", label: "Apariencia", icon: <EyeOpenIcon /> },
];

export function SettingsDialog({
  openSettings,
  setOpenSettings,
}: {
  openSettings: boolean;
  setOpenSettings: (open: boolean) => void;
}) {
  const [tema, setTema] = useState("dark");
  const [fondo, setFondo] = useState("translucent");
  const [colorAcento, setColorAcento] = useState("blue");
  const [colorGris, setColorGris] = useState("slate");
  const [borde, setBorde] = useState("Mediano");
  const [escala, setEscala] = useState("100%");

  // Estado para controlar qué sección de la sidebar está activa
  const [activeTab, setActiveTab] = useState<
    "apariencia" | "cuenta" | "general"
  >("apariencia");

  return (
    <Dialog.Root open={openSettings} onOpenChange={setOpenSettings}>
      <VisuallyHidden>
        <Dialog.Title>Configuración del Sistema</Dialog.Title>
        <Dialog.Description>
          Ventana para gestionar las preferencias de cuenta, apariencia del tema
          y configuraciones generales.
        </Dialog.Description>
      </VisuallyHidden>
      <Dialog.Content
        maxWidth="750px"
        style={{ padding: 0, overflow: "hidden" }}
      >
        <Grid columns="1fr 3fr" style={{ minHeight: "450px" }}>
          {/* --- SIDEBAR IZQUIERDA --- */}
          <Flex
            direction="column"
            gap="2"
            p="4"
            style={{
              backgroundColor: "var(--gray-1)",
            }}
          >
            <Flex align="center" gap="2" mb="4" px="2">
              <GearIcon width="18" height="18" />
              <Heading size="3">Configuración</Heading>
            </Flex>

            {/* Botones de Navegación de la Sidebar generados con un loop */}
            {SIDEBAR_TABS.map((tab) => (
              <Button
                key={tab.id}
                variant="ghost"
                style={{
                  color: "var(--white-1)",
                  cursor: activeTab === tab.id ? "unset" : "pointer",
                  padding: "var(--space-3) var(--space-3)",
                  justifyContent: "left",
                  backgroundColor:
                    activeTab === tab.id ? "var(--gray-3)" : "transparent",
                }}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.icon}
                {tab.label}
              </Button>
            ))}
          </Flex>

          {/* --- CONTENIDO PRINCIPAL (Derecha) --- */}
          <Flex direction="column" justify="between" p="5">
            {/* Contenedor dinámico según la pestaña activa */}
            <Box>
              {activeTab === "apariencia" && (
                <Flex
                  direction="column"
                  gap="5"
                  p="5"
                  style={{ width: "100%" }}
                >
                  <Heading size="4" style={{ color: "#fff" }}>
                    Apariencia
                  </Heading>

                  {/* TEMA Y FONDO DEL PANEL */}
                  <Grid columns={{ initial: "1", sm: "2" }} gap="4">
                    <Flex direction="column" gap="2">
                      <Text size="2" weight="bold" style={{ color: "#fff" }}>
                        Tema
                      </Text>
                      {/* Vista móvil */}
                      <Box display={{ initial: "block", sm: "none" }}>
                        <Select.Root value={tema} onValueChange={setTema}>
                          <Select.Trigger style={{ width: "100%" }} />
                          <Select.Content>
                            <Select.Item value="light">Claro</Select.Item>
                            <Select.Item value="dark">Oscuro</Select.Item>
                          </Select.Content>
                        </Select.Root>
                      </Box>
                      {/* Vista escritorio */}
                      <Box display={{ initial: "none", sm: "block" }}>
                        <Grid columns="2" gap="2">
                          <Button
                            type="button"
                            variant={tema === "light" ? "outline" : "surface"}
                            color={tema === "light" ? undefined : "gray"}
                            size="2"
                            onClick={() => setTema("light")}
                            style={{
                              justifyContent: "center",
                              gap: "6px",
                              outline:
                                tema === "light" ? "2px solid #fff" : "none",
                              outlineOffset: "-1px",
                              color: tema === "light" ? "#fff" : undefined,
                            }}
                          >
                            <SunIcon width="14" height="14" /> Claro
                          </Button>
                          <Button
                            type="button"
                            variant={tema === "dark" ? "outline" : "surface"}
                            color={tema === "dark" ? undefined : "gray"}
                            size="2"
                            onClick={() => setTema("dark")}
                            style={{
                              justifyContent: "center",
                              gap: "6px",
                              outline:
                                tema === "dark" ? "2px solid #fff" : "none",
                              outlineOffset: "-1px",
                              color: tema === "dark" ? "#fff" : undefined,
                            }}
                          >
                            <MoonIcon width="14" height="14" /> Oscuro
                          </Button>
                        </Grid>
                      </Box>
                    </Flex>

                    <Flex direction="column" gap="2">
                      <Text size="2" weight="bold" style={{ color: "#fff" }}>
                        Fondo del panel
                      </Text>
                      {/* Vista móvil */}
                      <Box display={{ initial: "block", sm: "none" }}>
                        <Select.Root value={fondo} onValueChange={setFondo}>
                          <Select.Trigger style={{ width: "100%" }} />
                          <Select.Content>
                            <Select.Item value="solid">Sólido</Select.Item>
                            <Select.Item value="translucent">
                              Translúcido
                            </Select.Item>
                          </Select.Content>
                        </Select.Root>
                      </Box>
                      {/* Vista escritorio */}
                      <Box display={{ initial: "none", sm: "block" }}>
                        <Grid columns="2" gap="2">
                          <Button
                            type="button"
                            variant={fondo === "solid" ? "outline" : "surface"}
                            color={fondo === "solid" ? undefined : "gray"}
                            size="2"
                            onClick={() => setFondo("solid")}
                            style={{
                              justifyContent: "center",
                              gap: "6px",
                              outline:
                                fondo === "solid" ? "2px solid #fff" : "none",
                              outlineOffset: "-1px",
                              color: fondo === "solid" ? "#fff" : undefined,
                            }}
                          >
                            <span
                              style={{
                                width: "8px",
                                height: "8px",
                                borderRadius: "50%",
                                backgroundColor: "#fff",
                              }}
                            />{" "}
                            Sólido
                          </Button>
                          <Button
                            type="button"
                            variant={
                              fondo === "translucent" ? "outline" : "surface"
                            }
                            color={fondo === "translucent" ? undefined : "gray"}
                            size="2"
                            onClick={() => setFondo("translucent")}
                            style={{
                              justifyContent: "center",
                              gap: "6px",
                              outline:
                                fondo === "translucent"
                                  ? "2px solid #fff"
                                  : "none",
                              outlineOffset: "-1px",
                              color:
                                fondo === "translucent" ? "#fff" : undefined,
                            }}
                          >
                            <span
                              style={{
                                width: "8px",
                                height: "8px",
                                borderRadius: "50%",
                                border: "1px solid #fff",
                              }}
                            />{" "}
                            Translúcido
                          </Button>
                        </Grid>
                      </Box>
                    </Flex>
                  </Grid>

                  {/* COLORES (DE ACENTO Y NEUTRO) */}
                  <Flex direction="column" gap="4">
                    <Flex direction="column" gap="2">
                      <Text size="2" weight="bold" style={{ color: "#fff" }}>
                        Color de acento
                      </Text>
                      {/* Vista móvil */}
                      <Box display={{ initial: "block", sm: "none" }}>
                        <Select.Root
                          value={colorAcento}
                          onValueChange={setColorAcento}
                        >
                          <Select.Trigger style={{ width: "100%" }} />
                          <Select.Content>
                            {[
                              "gray",
                              "gold",
                              "bronze",
                              "brown",
                              "yellow",
                              "amber",
                              "orange",
                              "tomato",
                              "red",
                              "ruby",
                              "crimson",
                              "pink",
                              "plum",
                              "purple",
                              "violet",
                              "iris",
                              "indigo",
                              "blue",
                              "cyan",
                              "teal",
                              "jade",
                              "green",
                              "grass",
                              "lime",
                              "mint",
                              "sky",
                            ].map((color) => (
                              <Select.Item
                                key={color}
                                value={color}
                                style={{
                                  color: `var(--${color}-9)`,
                                  fontWeight: "bold",
                                }}
                              >
                                {color.charAt(0).toUpperCase() + color.slice(1)}
                              </Select.Item>
                            ))}
                          </Select.Content>
                        </Select.Root>
                      </Box>
                      {/* Vista escritorio */}
                      <Box display={{ initial: "none", sm: "block" }}>
                        <Grid columns="9" gap="2">
                          {[
                            "gray",
                            "gold",
                            "bronze",
                            "brown",
                            "yellow",
                            "amber",
                            "orange",
                            "tomato",
                            "red",
                            "ruby",
                            "crimson",
                            "pink",
                            "plum",
                            "purple",
                            "violet",
                            "iris",
                            "indigo",
                            "blue",
                            "cyan",
                            "teal",
                            "jade",
                            "green",
                            "grass",
                            "lime",
                            "mint",
                            "sky",
                          ].map((color) => (
                            <Tooltip
                              key={color}
                              content={
                                color.charAt(0).toUpperCase() + color.slice(1)
                              }
                            >
                              <button
                                type="button"
                                onClick={() => setColorAcento(color)}
                                style={{
                                  width: "100%",
                                  paddingTop: "100%",
                                  position: "relative",
                                  borderRadius: "6px",
                                  border: "1px solid rgba(255,255,255,0.1)",
                                  outline:
                                    color === colorAcento
                                      ? "2px solid #fff"
                                      : "none",
                                  outlineOffset: "-1px",
                                  backgroundColor: `var(--${color}-9)`,
                                  cursor: "pointer",
                                  transition: "transform 0.1s ease",
                                }}
                                onMouseEnter={(e) =>
                                  (e.currentTarget.style.transform =
                                    "scale(1.05)")
                                }
                                onMouseLeave={(e) =>
                                  (e.currentTarget.style.transform = "scale(1)")
                                }
                              />
                            </Tooltip>
                          ))}
                        </Grid>
                      </Box>
                    </Flex>

                    <Flex direction="column" gap="2">
                      <Text size="2" weight="bold" style={{ color: "#fff" }}>
                        Color neutro (Gris)
                      </Text>
                      {/* Vista móvil */}
                      <Box display={{ initial: "block", sm: "none" }}>
                        <Select.Root
                          value={colorGris}
                          onValueChange={setColorGris}
                        >
                          <Select.Trigger style={{ width: "100%" }} />
                          <Select.Content>
                            {[
                              "gray",
                              "mauve",
                              "slate",
                              "sage",
                              "olive",
                              "sand",
                            ].map((gray) => (
                              <Select.Item key={gray} value={gray}>
                                {gray.charAt(0).toUpperCase() + gray.slice(1)}
                              </Select.Item>
                            ))}
                          </Select.Content>
                        </Select.Root>
                      </Box>
                      {/* Vista escritorio */}
                      <Box display={{ initial: "none", sm: "block" }}>
                        <Grid columns="6" gap="2">
                          {[
                            "gray",
                            "mauve",
                            "slate",
                            "sage",
                            "olive",
                            "sand",
                          ].map((gray) => (
                            <Tooltip
                              key={gray}
                              content={
                                gray.charAt(0).toUpperCase() + gray.slice(1)
                              }
                            >
                              <button
                                type="button"
                                onClick={() => setColorGris(gray)}
                                style={{
                                  width: "100%",
                                  paddingTop: "100%",
                                  position: "relative",
                                  borderRadius: "6px",
                                  border: "1px solid rgba(255,255,255,0.1)",
                                  outline:
                                    gray === colorGris
                                      ? "2px solid #fff"
                                      : "none",
                                  outlineOffset: "-1px",
                                  backgroundColor: `var(--${gray}-9)`,
                                  cursor: "pointer",
                                  transition: "transform 0.1s ease",
                                }}
                                onMouseEnter={(e) =>
                                  (e.currentTarget.style.transform =
                                    "scale(1.05)")
                                }
                                onMouseLeave={(e) =>
                                  (e.currentTarget.style.transform = "scale(1)")
                                }
                              />
                            </Tooltip>
                          ))}
                        </Grid>
                      </Box>
                    </Flex>
                  </Flex>

                  {/* GEOMETRÍA (BORDES Y ESCALADO) */}
                  <Flex direction="column" gap="4">
                    <Flex direction="column" gap="2">
                      <Text size="2" weight="bold" style={{ color: "#fff" }}>
                        Redondeado de bordes
                      </Text>
                      {/* Vista móvil */}
                      <Box display={{ initial: "block", sm: "none" }}>
                        <Select.Root value={borde} onValueChange={setBorde}>
                          <Select.Trigger style={{ width: "100%" }} />
                          <Select.Content>
                            {[
                              "Ninguno",
                              "Pequeño",
                              "Mediano",
                              "Grande",
                              "Completo",
                            ].map((radius) => (
                              <Select.Item key={radius} value={radius}>
                                {radius}
                              </Select.Item>
                            ))}
                          </Select.Content>
                        </Select.Root>
                      </Box>
                      {/* Vista escritorio */}
                      <Box display={{ initial: "none", sm: "block" }}>
                        <Grid columns="5" gap="2">
                          {[
                            "Ninguno",
                            "Pequeño",
                            "Mediano",
                            "Grande",
                            "Completo",
                          ].map((radius, idx) => {
                            const isSelected = radius === borde;
                            const radiusValues = [
                              "0",
                              "2px",
                              "4px",
                              "8px",
                              "50%",
                            ];
                            return (
                              <Flex
                                key={radius}
                                direction="column"
                                align="center"
                                gap="1"
                              >
                                <Button
                                  type="button"
                                  variant={isSelected ? "outline" : "surface"}
                                  color={isSelected ? undefined : "gray"}
                                  onClick={() => setBorde(radius)}
                                  style={{
                                    width: "100%",
                                    height: "52px",
                                    border: "1px solid #333",
                                    outline: isSelected
                                      ? "2px solid #fff"
                                      : "none",
                                    outlineOffset: "-1px",
                                    color: isSelected ? "#fff" : undefined,
                                    padding: 0,
                                  }}
                                >
                                  <div
                                    style={{
                                      width: "18px",
                                      height: "18px",
                                      borderLeft: "2px solid #3b82f6",
                                      borderBottom: "2px solid #3b82f6",
                                      borderRadius: radiusValues[idx],
                                    }}
                                  />
                                </Button>
                                <Text size="1" color="gray">
                                  {radius}
                                </Text>
                              </Flex>
                            );
                          })}
                        </Grid>
                      </Box>
                    </Flex>

                    <Flex direction="column" gap="2">
                      <Text size="2" weight="bold" style={{ color: "#fff" }}>
                        Escalado de interfaz
                      </Text>
                      {/* Vista móvil */}
                      <Box display={{ initial: "block", sm: "none" }}>
                        <Select.Root value={escala} onValueChange={setEscala}>
                          <Select.Trigger style={{ width: "100%" }} />
                          <Select.Content>
                            {["90%", "95%", "100%", "105%", "110%"].map(
                              (scale) => (
                                <Select.Item key={scale} value={scale}>
                                  {scale}
                                </Select.Item>
                              ),
                            )}
                          </Select.Content>
                        </Select.Root>
                      </Box>
                      {/* Vista escritorio */}
                      <Box display={{ initial: "none", sm: "block" }}>
                        <Grid columns="5" gap="2">
                          {["90%", "95%", "100%", "105%", "110%"].map(
                            (scale) => {
                              const isSelected = scale === escala;
                              return (
                                <Button
                                  key={scale}
                                  type="button"
                                  variant={isSelected ? "outline" : "surface"}
                                  color={isSelected ? undefined : "gray"}
                                  size="2"
                                  onClick={() => setEscala(scale)}
                                  style={{
                                    border: "1px solid #333",
                                    outline: isSelected
                                      ? "2px solid #fff"
                                      : "none",
                                    outlineOffset: "-1px",
                                    color: isSelected ? "#fff" : undefined,
                                  }}
                                >
                                  {scale}
                                </Button>
                              );
                            },
                          )}
                        </Grid>
                      </Box>
                    </Flex>
                  </Flex>
                </Flex>
              )}

              {activeTab === "cuenta" && (
                <Flex direction="column" gap="2">
                  <Heading size="4" mb="2">
                    Cuenta
                  </Heading>
                  <Text size="2" color="gray">
                    Información del perfil del usuario
                  </Text>
                </Flex>
              )}

              {activeTab === "general" && (
                <Flex direction="column" gap="2">
                  <Heading size="4" mb="2">
                    General
                  </Heading>
                  <Text size="2" color="gray">
                    Opciones generales del sistema e idioma.
                  </Text>
                </Flex>
              )}
            </Box>

            <Flex justify="end" mt="4">
              <Dialog.Close>
                <Button variant="surface" color="gray">
                  Cerrar
                </Button>
              </Dialog.Close>
            </Flex>
          </Flex>
        </Grid>
      </Dialog.Content>
    </Dialog.Root>
  );
}
