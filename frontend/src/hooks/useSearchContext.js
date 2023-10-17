import { create } from 'zustand';
import { useShallow } from 'zustand/react/shallow';

const useSearchContext = create((set) => ({
  tribunalSelecionado: '',
  busca: '',
	setTribunalSelecionado: 
		(tribunalSelecionado) => set(() => ({ tribunalSelecionado: tribunalSelecionado })),
	setBusca: (busca) => set(() => ({ busca: busca }))
}));

export default useSearchContext;
