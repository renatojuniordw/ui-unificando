import React, { useState } from "react";
import { AddressData } from "@/types/contract";

interface AddressStepProps {
  data: AddressData;
  handleInputChange: (field: keyof AddressData, value: any) => void;
}

export const AddressStep: React.FC<AddressStepProps> = ({
  data,
  handleInputChange,
}) => {
  const [loadingCep, setLoadingCep] = useState(false);
  const [cepError, setCepError] = useState("");

  const handleBlurCep = async () => {
    const cep = data.zipCode.replace(/\D/g, "");
    setCepError("");
    if (cep.length === 8) {
      setLoadingCep(true);
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000);
        const response = await fetch(
          `https://brasilapi.com.br/api/cep/v1/${cep}`,
          { signal: controller.signal },
        );
        clearTimeout(timeoutId);
        if (response.ok) {
          const address = await response.json();
          handleInputChange("street", address.street);
          handleInputChange("neighborhood", address.neighborhood);
          handleInputChange("city", address.city);
          handleInputChange("state", address.state);
        } else {
          setCepError("CEP não encontrado. Digite o endereço manualmente.");
        }
      } catch (error) {
        console.error("Erro ao buscar CEP", error);
        setCepError("Erro ao buscar CEP. Digite o endereço manualmente.");
      } finally {
        setLoadingCep(false);
      }
    }
  };

  return (
    <div className="space-y-12 animate-in">
      <div>
        <h2 className="text-3xl font-black text-slate-950 uppercase tracking-tighter leading-none mb-2 flex items-center gap-3">
          LOCALIZAÇÃO
        </h2>
        <div className="flex items-center gap-2">
           <div className="bg-[#ccff00] text-slate-950 px-2 py-0.5 text-[10px] font-black uppercase border border-slate-950">DOMICÍLIO_FISCAL</div>
           <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest italic">Informe o endereço que constará no contrato.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="md:col-span-1">
          <label className="label-text">
            CEP <span className="text-red-600">*</span>
          </label>
          <div className="relative">
            <input
              className="input-field"
              value={data.zipCode}
              onChange={(e) => {
                const val = e.target.value.replace(/\D/g, "").slice(0, 8);
                handleInputChange("zipCode", val);
              }}
              onBlur={handleBlurCep}
              placeholder="00000-000"
              maxLength={9}
              inputMode="numeric"
            />
            {loadingCep && (
              <div className="absolute right-4 top-4 text-slate-950 animate-spin text-lg">
                ⏳
              </div>
            )}
            {cepError && (
              <p className="text-red-600 text-[10px] font-black uppercase mt-2" role="alert">
                {cepError}
              </p>
            )}
          </div>
        </div>

        <div className="md:col-span-2">
          <label className="label-text">
            Rua / Logradouro <span className="text-red-600">*</span>
          </label>
          <input
            className="input-field"
            value={data.street}
            onChange={(e) => handleInputChange("street", e.target.value)}
            placeholder="EX: AVENIDA PAULISTA"
          />
        </div>

        <div>
          <label className="label-text">
            Número <span className="text-red-600">*</span>
          </label>
          <input
            className="input-field"
            value={data.number}
            onChange={(e) => handleInputChange("number", e.target.value)}
            placeholder="Nº"
            inputMode="numeric"
          />
        </div>

        <div>
          <label className="label-text">
            Complemento
          </label>
          <input
            className="input-field"
            value={data.complement}
            onChange={(e) => handleInputChange("complement", e.target.value)}
            placeholder="EX: SALA 12"
          />
        </div>

        <div>
          <label className="label-text">
            Bairro <span className="text-red-600">*</span>
          </label>
          <input
            className="input-field"
            value={data.neighborhood}
            onChange={(e) => handleInputChange("neighborhood", e.target.value)}
            placeholder="EX: CENTRO"
          />
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2">
            <label className="label-text">
              Cidade <span className="text-red-600">*</span>
            </label>
            <input
              className="input-field"
              value={data.city}
              onChange={(e) => handleInputChange("city", e.target.value)}
              placeholder="CIDADE"
            />
          </div>
          <div>
            <label className="label-text">
              UF <span className="text-red-600">*</span>
            </label>
            <input
              className="input-field"
              value={data.state}
              onChange={(e) => handleInputChange("state", e.target.value)}
              placeholder="UF"
              maxLength={2}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
