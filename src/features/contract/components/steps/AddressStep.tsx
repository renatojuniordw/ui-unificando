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

  // Simple CEP fetcher
  const handleBlurCep = async () => {
    const cep = data.zipCode.replace(/\D/g, "");
    if (cep.length === 8) {
      setLoadingCep(true);
      try {
        const response = await fetch(
          `https://brasilapi.com.br/api/cep/v1/${cep}`,
        );
        if (response.ok) {
          const address = await response.json();
          handleInputChange("street", address.street);
          handleInputChange("neighborhood", address.neighborhood);
          handleInputChange("city", address.city);
          handleInputChange("state", address.state);
        }
      } catch (error) {
        console.error("Erro ao buscar CEP", error);
      } finally {
        setLoadingCep(false);
      }
    }
  };

  return (
    <div className="space-y-8 animate-in">
      <div>
        <h2 className="text-xl font-bold text-slate-800 mb-2 flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center text-sm">
            📍
          </span>
          Endereço Completo
        </h2>
        <p className="text-slate-500 text-sm font-medium ml-10">
          Necessário para a qualificação contratual e emissão de Nota Fiscal.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ml-0 md:ml-10">
        <div className="md:col-span-1">
          <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">
            CEP <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              className="w-full bg-slate-50 border-2 border-slate-200 text-slate-900 px-4 py-3 rounded-2xl focus:border-indigo-500 focus:ring-0 outline-none font-medium transition-all placeholder:text-slate-400"
              value={data.zipCode}
              onChange={(e) => {
                const val = e.target.value.replace(/\D/g, "").slice(0, 8);
                handleInputChange("zipCode", val);
              }}
              onBlur={handleBlurCep}
              placeholder="00000-000"
              maxLength={9}
            />
            {loadingCep && (
              <div className="absolute right-3 top-3 text-indigo-500 animate-spin">
                ⏳
              </div>
            )}
          </div>
        </div>

        <div className="md:col-span-2">
          <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">
            Rua / Logradouro <span className="text-red-500">*</span>
          </label>
          <input
            className="w-full bg-slate-50 border-2 border-slate-200 text-slate-900 px-4 py-3 rounded-2xl focus:border-indigo-500 focus:ring-0 outline-none font-medium transition-all placeholder:text-slate-400"
            value={data.street}
            onChange={(e) => handleInputChange("street", e.target.value)}
            placeholder="Ex: Av. Paulista"
          />
        </div>

        <div>
          <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">
            Número <span className="text-red-500">*</span>
          </label>
          <input
            className="w-full bg-slate-50 border-2 border-slate-200 text-slate-900 px-4 py-3 rounded-2xl focus:border-indigo-500 focus:ring-0 outline-none font-medium transition-all placeholder:text-slate-400"
            value={data.number}
            onChange={(e) => handleInputChange("number", e.target.value)}
            placeholder="Ex: 1000"
          />
        </div>

        <div>
          <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">
            Complemento
          </label>
          <input
            className="w-full bg-slate-50 border-2 border-slate-200 text-slate-900 px-4 py-3 rounded-2xl focus:border-indigo-500 focus:ring-0 outline-none font-medium transition-all placeholder:text-slate-400"
            value={data.complement}
            onChange={(e) => handleInputChange("complement", e.target.value)}
            placeholder="Ex: Sala 42, Bloco B"
          />
        </div>

        <div>
          <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">
            Bairro <span className="text-red-500">*</span>
          </label>
          <input
            className="w-full bg-slate-50 border-2 border-slate-200 text-slate-900 px-4 py-3 rounded-2xl focus:border-indigo-500 focus:ring-0 outline-none font-medium transition-all placeholder:text-slate-400"
            value={data.neighborhood}
            onChange={(e) => handleInputChange("neighborhood", e.target.value)}
            placeholder="Ex: Centro"
          />
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">
              Cidade <span className="text-red-500">*</span>
            </label>
            <input
              className="w-full bg-slate-50 border-2 border-slate-200 text-slate-900 px-4 py-3 rounded-2xl focus:border-indigo-500 focus:ring-0 outline-none font-medium transition-all placeholder:text-slate-400"
              value={data.city}
              onChange={(e) => handleInputChange("city", e.target.value)}
              placeholder="Cidade"
            />
          </div>
          <div>
            <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">
              UF <span className="text-red-500">*</span>
            </label>
            <input
              className="w-full bg-slate-50 border-2 border-slate-200 text-slate-900 px-4 py-3 rounded-2xl focus:border-indigo-500 focus:ring-0 outline-none font-medium transition-all placeholder:text-slate-400 uppercase"
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
