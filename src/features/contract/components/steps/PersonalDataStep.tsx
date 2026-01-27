import React from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { PersonalData, ServiceSelection } from "@/types/contract";
import { ServiceCard } from "../ServiceCard";

interface PersonalDataStepProps {
  data: PersonalData;
  handleInputChange: (field: keyof PersonalData, value: any) => void;
  updateService: (service: keyof ServiceSelection) => void;
}

export const PersonalDataStep: React.FC<PersonalDataStepProps> = ({
  data,
  handleInputChange,
  updateService,
}) => {
  const formatDocument = (digits: string) => {
    if (digits.length <= 11) {
      // CPF: 000.000.000-00
      return digits
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    } else {
      // CNPJ: 00.000.000/0000-00
      return digits
        .replace(/^(\d{2})(\d)/, "$1.$2")
        .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
        .replace(/\.(\d{3})(\d)/, ".$1/$2")
        .replace(/(\d{4})(\d)/, "$1-$2");
    }
  };

  const handleDocumentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    // Extract only digits
    const digits = rawValue.replace(/\D/g, "");

    // Limit to 14 digits (CNPJ max)
    const validDigits = digits.slice(0, 14);

    const formatted = formatDocument(validDigits);
    handleInputChange("document", formatted);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.toLowerCase();
    // Remove spaces and characters that are typically invalid in emails (like accents usually)
    value = value.replace(/\s/g, "");
    handleInputChange("email", value);
  };

  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center text-sm">
            1
          </span>
          Dados Pessoais / Empresariais
        </h2>
        <div className="grid grid-cols-1 gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-[10px] font-black text-slate-400 mb-3 uppercase tracking-widest"
            >
              Nome ou Razão Social <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              className="w-full bg-slate-50 border-2 border-slate-200 text-slate-900 px-4 py-3 rounded-2xl focus:border-indigo-500 focus:ring-0 outline-none font-medium transition-all placeholder:text-slate-400"
              value={data.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              placeholder="Seu nome ou da empresa"
            />
          </div>
          <div>
            <label
              htmlFor="document"
              className="block text-[10px] font-black text-slate-400 mb-3 uppercase tracking-widest"
            >
              CPF ou CNPJ <span className="text-red-500">*</span>
            </label>
            <input
              id="document"
              className="w-full bg-slate-50 border-2 border-slate-200 text-slate-900 px-4 py-3 rounded-2xl focus:border-indigo-500 focus:ring-0 outline-none font-medium transition-all placeholder:text-slate-400"
              value={data.document}
              onChange={handleDocumentChange}
              placeholder="CPF ou CNPJ (somente números)"
              maxLength={18}
            />
          </div>

          {/* Legal Representative Fields (Only for CNPJ) */}
          {data.document.replace(/\D/g, "").length > 11 && (
            <div className="md:col-span-1 space-y-6 animate-in bg-slate-100 p-6 rounded-2xl border border-slate-200">
              <div className="col-span-full">
                <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wide mb-1 flex items-center gap-2">
                  👤 Responsável Legal
                </h3>
                <p className="text-[10px] text-slate-500 mb-4">
                  Como é uma Pessoa Jurídica (CNPJ), precisamos dos dados de
                  quem assinará o contrato.
                </p>
              </div>
              <div>
                <label className="block text-[10px] font-black text-slate-400 mb-3 uppercase tracking-widest">
                  Nome do Sócio/Responsável{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  className="w-full bg-white border-2 border-slate-200 text-slate-900 px-4 py-3 rounded-2xl focus:border-indigo-500 focus:ring-0 outline-none font-medium transition-all placeholder:text-slate-400"
                  value={data.representativeName}
                  onChange={(e) =>
                    handleInputChange("representativeName", e.target.value)
                  }
                  placeholder="Nome completo do assinante"
                />
              </div>
              <div>
                <label className="block text-[10px] font-black text-slate-400 mb-3 uppercase tracking-widest">
                  CPF do Responsável <span className="text-red-500">*</span>
                </label>
                <input
                  className="w-full bg-white border-2 border-slate-200 text-slate-900 px-4 py-3 rounded-2xl focus:border-indigo-500 focus:ring-0 outline-none font-medium transition-all placeholder:text-slate-400"
                  value={data.representativeDocument}
                  onChange={(e) => {
                    const val = e.target.value
                      .replace(/\D/g, "")
                      .slice(0, 11)
                      .replace(/(\d{3})(\d)/, "$1.$2")
                      .replace(/(\d{3})(\d)/, "$1.$2")
                      .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
                    handleInputChange("representativeDocument", val);
                  }}
                  placeholder="000.000.000-00"
                  maxLength={14}
                />
              </div>
            </div>
          )}
          <div>
            <label
              htmlFor="email"
              className="block text-[10px] font-black text-slate-400 mb-3 uppercase tracking-widest"
            >
              E-mail <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              className="w-full bg-slate-50 border-2 border-slate-200 text-slate-900 px-4 py-3 rounded-2xl focus:border-indigo-500 focus:ring-0 outline-none font-medium transition-all placeholder:text-slate-400"
              value={data.email}
              onChange={handleEmailChange}
              placeholder="seu@email.com"
            />
          </div>
          <div>
            <label className="block text-[10px] font-black text-slate-400 mb-3 uppercase tracking-widest">
              WhatsApp <span className="text-red-500">*</span>
            </label>
            <PhoneInput
              defaultCountry="br"
              value={data.whatsapp}
              onChange={(phone) => handleInputChange("whatsapp", phone)}
              inputClassName="!w-full !h-[50px] !bg-slate-50 !border-2 !border-slate-200 !text-slate-900 !px-4 !rounded-r-2xl !rounded-l-none !focus:border-indigo-500 !focus:ring-0 !outline-none !font-medium !transition-all placeholder:text-slate-400"
              countrySelectorStyleProps={{
                buttonClassName:
                  "!h-[50px] !bg-slate-50 !border-2 !border-slate-200 !text-slate-900 !px-3 !rounded-l-2xl !border-r-0 !hover:bg-slate-100",
                dropdownStyleProps: {
                  className: "!bg-white !text-slate-900 !border-slate-200",
                  listItemClassName: "!hover:bg-slate-50 !text-slate-900",
                },
              }}
              forceDialCode={true}
            />
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center text-sm">
            2
          </span>
          Selecione os Serviços <span className="text-red-500">*</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <ServiceCard
            title="Atendimento Digital"
            icon="💬"
            selected={data.services.atendimento}
            onClick={() => updateService("atendimento")}
          />
          <ServiceCard
            title="IA no Atendimento"
            icon="🤖"
            selected={data.services.ia}
            onClick={() => updateService("ia")}
          />
          <ServiceCard
            title="Sites & Presença"
            icon="🌐"
            selected={data.services.site}
            onClick={() => updateService("site")}
          />
        </div>
      </section>
    </div>
  );
};
