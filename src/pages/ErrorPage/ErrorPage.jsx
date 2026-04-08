import React from 'react';
import { useNavigate } from 'react-router';

const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-8 text-center">

            {/* Icon */}
            <div className="relative mb-8">
                <div className="w-28 h-28 rounded-full bg-base-200 border border-base-300 flex items-center justify-center">
                    <span className="font-mono text-4xl font-medium text-base-content/40">4</span>
                </div>
                <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-error/10 border border-error/30 flex items-center justify-center">
                    <span className="text-error text-xs font-bold">!</span>
                </div>
            </div>

            {/* Text */}
            <p className="text-xs font-medium tracking-widest text-base-content/40 uppercase mb-3">
                Error 404
            </p>
            <h1 className="text-3xl font-medium text-base-content mb-3">
                Page not found
            </h1>
            <p className="text-base text-base-content/60 max-w-sm mb-10 leading-relaxed">
                The page you're looking for doesn't exist or has been moved to another location.
            </p>

            {/* Actions */}
            <div className="flex gap-3 flex-wrap justify-center">
                <button
                    onClick={() => navigate('/')}
                    className="btn btn-neutral"
                >
                    Go home
                </button>
                <button
                    onClick={() => navigate(-1)}
                    className="btn btn-ghost"
                >
                    Go back
                </button>
            </div>

            {/* Search */}
            <div className="mt-16 pt-8 border-t border-base-200 w-full max-w-sm">
                <p className="text-sm text-base-content/40 mb-4">Looking for something specific?</p>
                <div className="flex gap-2">
                    <input
                        type="text"
                        placeholder="Search the site..."
                        className="input input-bordered flex-1"
                    />
                    <button className="btn btn-ghost">Search</button>
                </div>
            </div>

        </div>
    );
};

export default ErrorPage;