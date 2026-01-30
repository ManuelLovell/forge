import { useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../supabase/supabaseClient';
import { SystemResponse } from '../interfaces/SystemResponse';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

export const SystemPage = () => {
  const [shareId, setShareId] = useState('');
  const [systemData, setSystemData] = useState<SystemResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchSystemData = async () => {
    if (!shareId.trim()) {
      setError('Please enter a share_id');
      return;
    }

    setLoading(true);
    setError(null);
    setSystemData(null);

    try {
      const { data, error } = await supabase
        .from('v_bs_system_with_attributes')
        .select('*')
        .eq('share_id', shareId)
        .maybeSingle();
      
      if (error) throw error;
      setSystemData(data);
    } catch (err: any) {
      setError(err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      key="system"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="p-4"
    >
      <h1 className="text-2xl font-bold mb-4">System Test</h1>
      
      <div className="mb-6 flex gap-2">
        <input
          type="text"
          value={shareId}
          onChange={(e) => setShareId(e.target.value)}
          placeholder="Enter share_id"
          className="flex-1 px-4 py-2 bg-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={loading}
        />
        <button
          onClick={fetchSystemData}
          disabled={loading}
          className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {loading ? 'Loading...' : 'Confirm'}
        </button>
      </div>

      {error && (
        <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
          <strong>Error:</strong> {error}
        </div>
      )}

      {systemData && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">Response Data:</h2>
          <pre className="bg-gray-900 p-4 rounded-md overflow-auto max-h-96 text-sm">
            {JSON.stringify(systemData, null, 2)}
          </pre>
        </div>
      )}

      {!systemData && !error && !loading && (
        <p className="text-gray-500">Enter a share_id and click Confirm to fetch system data.</p>
      )}
    </motion.div>
  );
};
