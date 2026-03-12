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
      return digits
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    } else {
      return digits
        .replace(/^(\d{2})(\d)/, "$1.$2")
        .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
        .replace(/\.(\d{3})(\d)/, ".$1/$2")
        .replace(/(\d{4})(\d)/, "$1-$2");
    }
  };

  const handleDocumentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    const digits = rawValue.replace(/\D/g, "");
    const validDigits = digits.slice(0, 14);
    const formatted = formatDocument(validDigits);
    handleInputChange("document", formatted);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.toLowerCase();
    value = value.replace(/\s/g, "");
    handleInputChange("email", value);
  };

  return (
    <div className="space-y-16">
      <section>
        <div className="mb-10">
          <h2 className="text-3xl font-black text-slate-950 uppercase tracking-tighter leading-none mb-2">
            QUALIFICAÇÃO DAS PARTES
          </h2>
          <div className="flex items-center gap-2">
             <div className="bg-[#ccff00] text-slate-950 px-2 py-0.5 text-[10px] font-black uppercase border border-slate-950">REQUISITO_LEGAL</div>
             <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest italic">Informe seus dados oficiais para o contrato.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8">
          <div>
            <label htmlFor="name" className="label-text">
              Nome ou Razão Social <span className="text-red-600">*</span>
            </label>
            <input
              id="name"
              className="input-field"
              value={data.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              placeholder="NOME COMPLETO OU NOME DA EMPRESA"
            />
          </div>
          <div>
            <label htmlFor="document" className="label-text">
              CPF ou CNPJ <span className="text-red-600">*</span>
            </label>
            <input
              id="document"
              className="input-field"
              value={data.document}
              onChange={handleDocumentChange}
              placeholder="00.000.000/0000-00"
              maxLength={18}
            />
          </div>

          {/* Legal Representative Fields (CNPJ Box) */}
          {data.document.replace(/\D/g, "").length > 11 && (
            <div className="md:col-span-1 space-y-8 animate-in bg-[#ccff00] p-10 border-4 border-slate-950 shadow-[10px_10px_0px_#000]">
              <div className="col-span-full border-b-2 border-slate-950 pb-4 mb-2">
                <h3 className="text-xl font-black text-slate-950 uppercase tracking-tighter leading-none">
                  RESPONSÁVEL LEGAL
                </h3>
                <p className="text-[10px] font-bold text-slate-700 mt-2 uppercase">
                  IDENTIFICADO CNPJ: OBRIGATÓRIA A QUALIFICAÇÃO DO ASSINANTE.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="label-text text-slate-800">
                    Nome do Sócio/Assinante <span className="text-red-600">*</span>
                  </label>
                  <input
                    className="input-field border-slate-950 bg-white"
                    value={data.representativeName}
                    onChange={(e) =>
                      handleInputChange("representativeName", e.target.value)
                    }
                    placeholder="NOME DO REPRESENTANTE"
                  />
                </div>
                <div>
                  <label className="label-text text-slate-800">
                    CPF do Responsável <span className="text-red-600">*</span>
                  </label>
                  <input
                    className="input-field border-slate-950 bg-white"
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
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <label htmlFor="email" className="label-text">
                E-mail de Contato <span className="text-red-600">*</span>
              </label>
              <input
                id="email"
                type="email"
                className="input-field"
                value={data.email}
                onChange={handleEmailChange}
                placeholder="EXEMPLO@UNIFICANDO.COM"
              />
            </div>
            <div>
              <label className="label-text">
                WhatsApp <span className="text-red-600">*</span>
              </label>
              <div className="brutalist-phone">
                <PhoneInput
                  defaultCountry="br"
                  value={data.whatsapp}
                  onChange={(phone) => handleInputChange("whatsapp", phone)}
                  inputClassName="!w-full !h-[60px] !bg-white !border-4 !border-slate-950 !text-slate-950 !px-4 !rounded-none !font-mono !font-bold !text-sm !outline-none !shadow-[4px_4px_0px_#ccff00]"
                  countrySelectorStyleProps={{
                    buttonClassName:
                      "!h-[60px] !bg-white !border-4 !border-slate-950 !text-slate-950 !px-3 !rounded-none !border-r-0 !hover:bg-slate-50",
                    dropdownStyleProps: {
                      className: "!bg-white !text-slate-950 !border-4 !border-slate-950 !rounded-none !p-0 !mt-2",
                      listItemClassName: "!hover:bg-[#ccff00] !text-slate-950 !font-bold !uppercase !text-xs",
                    },
                  }}
                  forceDialCode={true}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mb-10">
          <h2 className="text-3xl font-black text-slate-950 uppercase tracking-tighter leading-none mb-2">
            DEFINIÇÃO DO ESCOPO
          </h2>
          <div className="flex items-center gap-2">
             <div className="bg-slate-950 text-white px-2 py-0.5 text-[10px] font-black uppercase">MÓDULOS_ATIVOS</div>
             <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest italic">Selecione o que será incluído no contrato.</p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
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
