import React, { useState, useRef, useEffect, useCallback, memo } from "react";
import { X } from "lucide-react";
import { openWhatsAppWithMessage } from "@/lib/utils";
import { planesData } from "../data/planesData";
import { pedirData } from "../data/pedirData";

const inputClass = "w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-teal-500 focus:outline-none transition-colors";

function buildWhatsAppMessage(form) {
  return [
    "Hola, me gustaría adquirir el siguiente servicio:",
    "",
    `Servicio: ${form.servicio}`,
    `Nombre: ${form.nombre}`,
    `Mensaje: ${form.mensaje}`,
  ].join("\n");
}

const PlanModal = memo(function PlanModal({ plan, onClose }) {
  const [form, setForm] = useState({
    nombre: "",
    servicio: plan?.name || "",
    mensaje: "",
  });
  const firstInputRef = useRef(null);

  useEffect(() => { firstInputRef.current?.focus(); }, []);

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      openWhatsAppWithMessage(buildWhatsAppMessage(form));
    },
    [form]
  );

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        className="relative bg-white rounded-3xl shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto p-8"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 id="modal-title" className="font-queering text-2xl font-bold text-gray-900 mb-1">
          Elegir plan
        </h2>
        <p id="modal-desc" className="text-gray-500 text-sm mb-6">
          Completa tus datos y te contactamos a la brevedad.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1.5 text-sm font-medium">Nombre</label>
            <input
              ref={firstInputRef}
              type="text"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              required
              placeholder="Tu nombre completo"
              className={inputClass}
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1.5 text-sm font-medium">Servicio elegido</label>
            <select
              name="servicio"
              value={form.servicio}
              onChange={handleChange}
              required
              className={inputClass}
            >
              <option value="">Selecciona un servicio</option>
              <optgroup label="Combos">
                {planesData.combos.map((p) => (
                  <option key={p.id} value={p.name}>{p.name}</option>
                ))}
              </optgroup>
              <optgroup label="Diseño Gráfico">
                {planesData.diseno.map((p) => (
                  <option key={p.id} value={p.name}>{p.name}</option>
                ))}
              </optgroup>
              <optgroup label="Creación de Video">
                {planesData.contenido.map((p) => (
                  <option key={p.id} value={p.name}>{p.name}</option>
                ))}
              </optgroup>
              <optgroup label="Combi Completa">
                {planesData.combiCompleta.map((p) => (
                  <option key={p.id} value={p.name}>{p.name}</option>
                ))}
              </optgroup>
              <optgroup label="Logo">
                {planesData.logo.map((p) => (
                  <option key={p.id} value={p.name}>{p.name}</option>
                ))}
              </optgroup>
              <optgroup label="Flyers">
                {pedirData.flyers.map((p) => (
                  <option key={p.id} value={p.name}>{p.name}</option>
                ))}
              </optgroup>
              <optgroup label="Video">
                {pedirData.video.map((p) => (
                  <option key={p.id} value={p.name}>{p.name}</option>
                ))}
              </optgroup>
              <optgroup label="Otros">
                <option value="Render 3D">Render 3D</option>
                <option value="Modelados 3D">Modelados 3D</option>
                <option value="Eventos">Eventos</option>
              </optgroup>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 mb-1.5 text-sm font-medium">Mensaje</label>
            <textarea
              name="mensaje"
              value={form.mensaje}
              onChange={handleChange}
              rows="4"
              placeholder="¿Algo más que quieras contarnos?"
              className={`${inputClass} resize-none`}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-teal-500 hover:bg-teal-600 text-white py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-md hover:shadow-teal-500/20"
          >
            Enviar por WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
});

export default PlanModal;
